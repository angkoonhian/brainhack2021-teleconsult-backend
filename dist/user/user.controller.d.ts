import authService from './auth.service';
import { userDTO, pushTokenDTO } from './model/user.model';
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
    getPushToken(pushTokenDTO: pushTokenDTO): Promise<import("../schemas/user.schema").Iuser>;
    getOneUserName(userId: string): Promise<string>;
    getAllUsers(): Promise<import("../schemas/user.schema").Iuser[]>;
}
