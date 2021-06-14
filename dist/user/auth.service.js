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
exports.authService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let authService = class authService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async loginService(username, password) {
        const loginUser = await this.userModel.findOne({
            username: username,
        });
        if (!loginUser) {
            throw new Error('User does not exist');
        }
        const isEqual = this.checkPassword(password, password);
        if (!isEqual) {
            throw new Error('Password is incorrect');
        }
        const token = this.getSignedJwtToken(loginUser);
        return {
            userId: loginUser._id,
            token: token,
            tokenExpiration: process.env.JWT_EXPIRE,
        };
    }
    async registerService(userDTO) {
        console.log(userDTO);
        const registerUser = await this.userModel.findOne({
            username: userDTO.username,
        });
        if (registerUser) {
            throw new Error('User already exist');
        }
        const hashedPassword = await this.hashPassword(userDTO.password);
        const newUser = {
            username: userDTO.username,
            password: hashedPassword,
            email: userDTO.email,
            phoneNumber: userDTO.phoneNumber
        };
        this.userModel.create(newUser);
        return newUser;
    }
    getSignedJwtToken(loginUser) {
        jsonwebtoken_1.sign({ userId: loginUser._id, userEmail: loginUser.email }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    async checkPassword(inputPassword, originalPassword) {
        await bcrypt.compare(inputPassword, originalPassword);
    }
};
authService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], authService);
exports.authService = authService;
exports.default = authService;
//# sourceMappingURL=auth.service.js.map