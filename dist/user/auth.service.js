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
exports.authService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user_schema_1 = require("../schemas/user.schema");
let authService = class authService {
    constructor() { }
    async loginService(username, password) {
        console.log(username);
        const loginUser = await user_schema_1.default.findOne({
            username: username,
        });
        console.log(username);
        if (!loginUser) {
            throw new Error('User does not exist');
        }
        console.log(loginUser.password);
        console.log(password);
        const isEqual = await bcrypt.compare(password, loginUser.password);
        if (!isEqual) {
            throw new Error('Password is incorrect');
        }
        const token = this.getSignedJwtToken(loginUser);
        console.log(token);
        return {
            userId: loginUser._id,
            token: token,
            tokenExpiration: "30d",
        };
    }
    async registerService(userDTO) {
        console.log(userDTO);
        const registerUser = await user_schema_1.default.findOne({
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
        user_schema_1.default.create(newUser);
        return newUser;
    }
    getSignedJwtToken(loginUser) {
        return jsonwebtoken_1.sign({ userId: loginUser._id, userEmail: loginUser.email }, "brainhack", {
            expiresIn: "30d",
        });
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    async checkPassword(inputPassword, originalPassword) {
        return await bcrypt.compare(inputPassword, originalPassword);
    }
};
authService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], authService);
exports.authService = authService;
exports.default = authService;
//# sourceMappingURL=auth.service.js.map