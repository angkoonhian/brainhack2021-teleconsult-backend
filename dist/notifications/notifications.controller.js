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
exports.notificationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const notifications_service_1 = require("./notifications.service");
const notifications_model_1 = require("./model/notifications.model");
let notificationsController = class notificationsController {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    Register(notificationsDTO) {
        return this.notificationsService.pushNotifications(notificationsDTO);
    }
};
__decorate([
    common_1.Post('pushNotifications'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notifications_model_1.notificationsDTO]),
    __metadata("design:returntype", void 0)
], notificationsController.prototype, "Register", null);
notificationsController = __decorate([
    swagger_1.ApiTags('notifications'),
    common_1.Controller('notifications'),
    __metadata("design:paramtypes", [notifications_service_1.default])
], notificationsController);
exports.notificationsController = notificationsController;
//# sourceMappingURL=notifications.controller.js.map