"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("../schemas/user.schema");
const appointment_schema_1 = require("../schemas/appointment.schema");
const clinic_schema_1 = require("../schemas/clinic.schema");
let AppointmentService = class AppointmentService {
    constructor() { }
    async getUserAppointment(patientId) {
        try {
            const appointments = await appointment_schema_1.default.find({ patientId: patientId });
            return appointments;
        }
        catch (err) {
            throw err;
        }
    }
    async getClinicAppointment(clinicId) {
        try {
            const appointments = await appointment_schema_1.default.find({ clinicId: clinicId });
            return appointments;
        }
        catch (err) {
            throw err;
        }
    }
    async createNewAppointment(appointment) {
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
            };
            appointment_schema_1.default.create(newAppointment).then(async (res) => {
                console.log("created");
                console.log(res);
                const patient = await user_schema_1.default.findOne({ _id: appointment.patientId });
                console.log(patient);
                patient.appointments.push(res._id);
                await patient.save();
                const clinic = await clinic_schema_1.default.findOne({ _id: appointment.clinicId });
                console.log(clinic);
                clinic.appointments.push(res._id);
                await clinic.save();
            });
            return newAppointment;
        }
        catch (err) {
            throw err;
        }
    }
    async deletePatientAppointment(appointmentId) {
        try {
            const deletedAppt = await appointment_schema_1.default.findOne({ _id: appointmentId });
            if (deletedAppt.clinicRemove === true) {
                await appointment_schema_1.default.deleteOne({ _id: appointmentId });
            }
            else {
                await appointment_schema_1.default.updateOne({ _id: appointmentId }, { patientRemove: true, patientId: "" });
            }
            await user_schema_1.default.updateOne({ _id: deletedAppt.patientId.toString() }, { $pullAll: { appointments: [appointmentId] } });
            return deletedAppt;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteClinicAppointment(appointmentId) {
        try {
            const deletedAppt = await appointment_schema_1.default.findOne({ _id: appointmentId });
            if (deletedAppt.patientRemove === true) {
                await appointment_schema_1.default.deleteOne({ _id: appointmentId });
            }
            else {
                await appointment_schema_1.default.updateOne({ _id: appointmentId }, { clinicRemove: true, clinicId: "" });
            }
            await clinic_schema_1.default.updateOne({ _id: deletedAppt.clinicId.toString() }, { $pullAll: { appointments: [appointmentId] } });
            return deletedAppt;
        }
        catch (err) {
            throw err;
        }
    }
};
AppointmentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppointmentService);
exports.AppointmentService = AppointmentService;
exports.default = AppointmentService;
//# sourceMappingURL=appointment.service.js.map