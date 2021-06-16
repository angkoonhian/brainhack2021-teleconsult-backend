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
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const user_model_1 = require("./model/user.model");
let userController = class userController {
    constructor(AuthService) {
        this.AuthService = AuthService;
    }
    login(username, password) {
        return this.AuthService.loginService(username, password);
    }
    Register(userDTO) {
        return this.AuthService.registerService(userDTO);
    }
    getPushToken(pushToken, userId) {
        return this.AuthService.updatePushToken(userId, pushToken);
    }
    getOneUserName(userId) {
        return this.AuthService.getOneUserName(userId);
    }
};
__decorate([
    common_1.Get('login/:username/:password'),
    __param(0, common_1.Param('username')),
    __param(1, common_1.Param('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], userController.prototype, "login", null);
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.userDTO]),
    __metadata("design:returntype", void 0)
], userController.prototype, "Register", null);
__decorate([
    common_1.Post('pushToken'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], userController.prototype, "getPushToken", null);
__decorate([
    common_1.Get('getOneUserName/:userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], userController.prototype, "getOneUserName", null);
userController = __decorate([
    swagger_1.ApiTags('user'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.default])
], userController);
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map