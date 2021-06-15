import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import User from '../schemas/user.schema';
import Appointment from '../schemas/appointment.schema';
import Clinic from 'src/schemas/clinic.schema';
import { truncateSync } from 'fs';

@Injectable()
export class AppointmentService {
    constructor() {}

    public async getUserAppointment(patientId) {
        try {
            const appointments = await Appointment.find({patientId: patientId});
            return appointments
        } catch (err) {
            console.log(err);
        }
    }

    public async getClinicAppointment(clinicId) {
        try {
            const appointments = await Appointment.find({clinicId: clinicId});
            return appointments
        } catch (err) {
            console.log(err);
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
                readStatus: false,
                status: 'Upcoming',
                patientRemove: false,
                clinicRemove: false
            }
            Appointment.create(newAppointment).then(async res => {
                console.log("created")
                console.log(res);
                // Update patient appointments
                const patient = await User.findOne({_id: appointment.patientId})
                patient.appointments.push(res._id)
                await patient.save();
                // Update clinic appointments
                const clinic = await Clinic.findOne({_id: appointment.clinicId})
                clinic.appointments.push(res._id)
                await patient.save();
            //const clinic = await User.findOne({_id: appointment.clinicId})
            })
            return newAppointment
        } catch (err) {
            console.log(err)
        }
    }

    public async deletePatientAppointment(appointmentId) {
        try {
            const deletedAppt = await Appointment.findOne({_id: appointmentId});
            // Check if clinic delete appt already
            if (deletedAppt.clinicRemove === true) {
                // Delete appointment
                await Appointment.deleteOne({_id: appointmentId});
            } else {
                await Appointment.updateOne({_id: appointmentId}, {patientRemove: true})
            }
            // Delete appt from patient
            await User.updateOne(
                { _id: deletedAppt.patientId.toString() },
                { $pullAll: { appointments: [appointmentId]}}
            )
            return deletedAppt
        } catch (err) {
            console.log(err)
        }
    }

    public async deleteClinicAppointment(appointmentId) {
        try {
            const deletedAppt = await Appointment.findOne({_id: appointmentId});
            // Check if clinic delete appt already
            if (deletedAppt.patientRemove === true) {
                // Delete appointment
                await Appointment.deleteOne({_id: appointmentId});
            } else {
                await Appointment.updateOne({_id: appointmentId}, {clinicRemove: true})
            }
            // Delete appt from patient
            await User.updateOne(
                { _id: deletedAppt.patientId.toString() },
                { $pullAll: { appointments: [appointmentId]}}
            )
            return deletedAppt
        } catch (err) {
            console.log(err)
        }
    }
}

export default AppointmentService