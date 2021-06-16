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
exports.clinicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const clinic_service_1 = require("./clinic.service");
const clinic_model_1 = require("./model/clinic.model");
let clinicController = class clinicController {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    login(username, password) {
        return this.clinicService.loginService(username, password);
    }
    Register(clinicDTO) {
        console.log("asd");
        return this.clinicService.registerService(clinicDTO);
    }
    getPushToken(pushTokenDTO) {
        return this.clinicService.updatePushToken(pushTokenDTO);
    }
    getAllClinics() {
        return this.clinicService.getAllClinicsService();
    }
    getOneClinic(clinicId) {
        console.log(clinicId);
        return this.clinicService.getOneClinicService(clinicId);
    }
    getOneClinicDoctors(clinicId) {
        return this.clinicService.getOneClinicDoctors(clinicId);
    }
};
__decorate([
    common_1.Get('login/:username/:password'),
    __param(0, common_1.Param('username')),
    __param(1, common_1.Param('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], clinicController.prototype, "login", null);
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinic_model_1.clinicDTO]),
    __metadata("design:returntype", void 0)
], clinicController.prototype, "Register", null);
__decorate([
    common_1.Post('pushToken'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinic_model_1.pushTokenDTO]),
    __metadata("design:returntype", void 0)
], clinicController.prototype, "getPushToken", null);
__decorate([
    common_1.Get('allClinics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], clinicController.prototype, "getAllClinics", null);
__decorate([
    common_1.Get('oneClinic/:clinicId'),
    __param(0, common_1.Param('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], clinicController.prototype, "getOneClinic", null);
__decorate([
    common_1.Get('clinicDoctors/:clinicId'),
    __param(0, common_1.Param('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], clinicController.prototype, "getOneClinicDoctors", null);
clinicController = __decorate([
    swagger_1.ApiTags('clinic'),
    common_1.Controller('authClinic'),
    __metadata("design:paramtypes", [clinic_service_1.default])
], clinicController);
exports.clinicController = clinicController;
//# sourceMappingURL=clinic.controller.js.map