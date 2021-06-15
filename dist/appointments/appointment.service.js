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
            console.log(err);
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
                readStatus: false,
                status: 'Upcoming'
            };
            appointment_schema_1.default.create(newAppointment).then(async (res) => {
                console.log("created");
                console.log(res);
                const patient = await user_schema_1.default.findOne({ _id: appointment.patientId });
                patient.appointments.push(res._id);
                await patient.save();
                const clinic = await clinic_schema_1.default.findOne({ _id: appointment.clinicId });
                clinic.appointments.push(res._id);
                await patient.save();
            });
            return newAppointment;
        }
        catch (err) {
            console.log(err);
        }
    }
    async deletePatientAppointment(appointmentId) {
        try {
            const deletedAppt = await appointment_schema_1.default.findOne({ _id: appointmentId });
            await appointment_schema_1.default.deleteOne({ _id: appointmentId });
            await user_schema_1.default.updateOne({ _id: deletedAppt.patientId.toString() }, { $pullAll: { appointments: [appointmentId] } });
            await clinic_schema_1.default.updateOne({ _id: deletedAppt.clinicId.toString() }, { $pullAll: { appointments: [appointmentId] } });
            return deletedAppt;
        }
        catch (err) {
            console.log(err);
        }
    }
    async deleteClinicAppointment(appointmentId) {
        try {
            const deletedAppt = await appointment_schema_1.default.findOne({ _id: appointmentId });
            await appointment_schema_1.default.deleteOne({ _id: appointmentId });
            await user_schema_1.default.updateOne({ _id: deletedAppt.patientId.toString() }, { $pullAll: { appointments: [appointmentId] } });
            await clinic_schema_1.default.updateOne({ _id: deletedAppt.clinicId.toString() }, { $pullAll: { appointments: [appointmentId] } });
            return deletedAppt;
        }
        catch (err) {
            console.log(err);
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