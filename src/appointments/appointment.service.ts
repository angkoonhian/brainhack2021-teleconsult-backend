import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import User from '../schemas/user.schema';
import Appointment from '../schemas/appointment.schema';
import Clinic from 'src/schemas/clinic.schema';
import { truncateSync } from 'fs';
import * as mongoose from 'mongoose';

@Injectable()
export class AppointmentService {
    constructor() {}

    public async getUserAppointment(patientId) {
        try {
            const appointments = await Appointment.find({patientId: patientId});
            return appointments
        } catch (err) {
            throw err
        }
    }

    public async getClinicAppointment(clinicId) {
        try {
            const appointments = await Appointment.find({clinicId: clinicId});
            return appointments
        } catch (err) {
            throw err
        }
    }


    public async createNewAppointment(appointment) {
        try {
            const newAppointment = {
                patientId: appointment.patientId,
                clinicId: appointment.clinicId,
                date: appointment.date,
                time: appointment.time,
                content: appointment.content,
                doctorsName: appointment.doctorsName,
                consultType: appointment.consultType,
                readStatus: false,
                status: 'Upcoming',
                patientRemoved: false,
                clinicRemoved: false
            }
            Appointment.create(newAppointment).then(async res => {
                console.log("created")
                console.log(res);
                // Update patient appointments
                const patient = await User.findOne({_id: appointment.patientId})
                console.log(patient)
                patient.appointments.push(res._id)
                await patient.save();
                // Update clinic appointments
                const clinic = await Clinic.findOne({_id: appointment.clinicId})
                console.log(clinic)
                clinic.appointments.push(res._id)
                await clinic.save();
            //const clinic = await User.findOne({_id: appointment.clinicId})
            })
            return newAppointment
        } catch (err) {
            throw err
        }
    }

    public async deletePatientAppointment(appointmentIdz) {
        console.log(appointmentIdz.appointmentId)
        const appointmentId = appointmentIdz.appointmentId.toString()
        try {
            const deletedAppt = await Appointment.findOne({_id: appointmentId});
            console.log(deletedAppt)
            // Check if clinic delete appt already
            if (deletedAppt.clinicRemove === true) {
                // Delete appointment
                await Appointment.deleteOne({_id: appointmentId});
            } else {
                await Appointment.updateOne({_id: appointmentId}, {patientRemoved: true, patientId: null})
            }
            if (deletedAppt.patientId === null) {
                return;
            } else {
                // Delete appt from patient
                await User.updateOne(
                    { _id: deletedAppt.patientId.toString() },
                    { $pullAll: { appointments: [appointmentId]}}
                )
                return deletedAppt
            }
        } catch (err) {
            throw err
        }
    }

    public async deleteClinicAppointment(appointmentId) {
        try {
            const deletedAppt = await Appointment.findOne({_id: appointmentId});
            // Check if patient delete appt already
            if (deletedAppt.patientRemove === true) {
                // Delete appointment
                await Appointment.deleteOne({_id: appointmentId});
            } else {
                await Appointment.updateOne({_id: appointmentId}, {clinicRemoved: true, clinicId: null})
            }
            if (deletedAppt.clinicId === null) {
                return;
            } else {
                // Delete appt from clinic
                await Clinic.updateOne(
                    { _id: deletedAppt.clinicId.toString() },
                    { $pullAll: { appointments: [appointmentId]}}
                )
                return deletedAppt
            }
        } catch (err) {
            throw err
        }
    }
}

export default AppointmentService