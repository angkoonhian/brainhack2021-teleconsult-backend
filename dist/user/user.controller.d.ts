import authService from './auth.service';
import { userDTO } from './model/user.model';
export declare class userController {
    private readonly AuthService;
    constructor(AuthService: authService);
    login(username: string, password: string): Promise<{
        userId: string;
        token: any;
        tokenExpiration: string;
    }>;
    Register(userDTO: userDTO): Promise<{
        username: any;
        password: any;
        email: any;
        phoneNumber: any;
    }>;
    getPushToken(pushToken: string, userId: string): Promise<import("../schemas/user.schema").Iuser>;
    getOneUserName(userId: string): Promise<string>;
}
