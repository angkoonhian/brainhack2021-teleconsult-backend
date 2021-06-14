import authService from './auth.service';
import { userDTO } from './model/user.model';
export declare class userController {
    private readonly AuthService;
    constructor(AuthService: authService);
    login(username: string, password: string): Promise<{
        userId: any;
        token: void;
        tokenExpiration: string;
    }>;
    Register(userDTO: userDTO): Promise<{
        username: any;
        password: any;
        email: any;
        phoneNumber: any;
    }>;
}
