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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const appointment_service_1 = require("./appointment.service");
const appointment_model_1 = require("./model/appointment.model");
let appointmentController = class appointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    getPatientAppointments(patientId) {
        console.log(patientId);
        return this.appointmentService.getUserAppointment(patientId);
    }
    getClinicAppointments(clinicId) {
        console.log(clinicId);
        return this.appointmentService.getClinicAppointment(clinicId);
    }
    createAppointments(newAppointmentDTO) {
        return this.appointmentService.createNewAppointment(newAppointmentDTO);
    }
    deletePatientAppointments(appointmentId) {
        return this.appointmentService.deletePatientAppointment(appointmentId);
    }
    deleteClinicAppointments(appointmentId) {
        return this.appointmentService.deleteClinicAppointment(appointmentId);
    }
};
__decorate([
    common_1.Get('getPatientAppointments/:patientId'),
    __param(0, common_1.Param('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], appointmentController.prototype, "getPatientAppointments", null);
__decorate([
    common_1.Get('getClinicAppointments/:clinicId'),
    __param(0, common_1.Param('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], appointmentController.prototype, "getClinicAppointments", null);
__decorate([
    common_1.Post('createAppointments'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_model_1.newAppointmentDTO]),
    __metadata("design:returntype", void 0)
], appointmentController.prototype, "createAppointments", null);
__decorate([
    common_1.Delete('deletePatientAppointments'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], appointmentController.prototype, "deletePatientAppointments", null);
__decorate([
    common_1.Delete('deleteClinicAppointments'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], appointmentController.prototype, "deleteClinicAppointments", null);
appointmentController = __decorate([
    swagger_1.ApiTags('appointments'),
    common_1.Controller('appointments'),
    __metadata("design:paramtypes", [appointment_service_1.default])
], appointmentController);
exports.appointmentController = appointmentController;
//# sourceMappingURL=appointment.controller.js.map