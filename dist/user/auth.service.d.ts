import { Model } from 'mongoose';
import User from '../schemas/user.schema';
export declare class authService {
    private userModel;
    constructor(userModel: Model<typeof User>);
    loginService(username: any, password: any): Promise<{
        userId: any;
        token: void;
        tokenExpiration: string;
    }>;
    registerService(userDTO: any): Promise<{
        username: any;
        password: any;
        email: any;
        phoneNumber: any;
    }>;
    private getSignedJwtToken;
    private hashPassword;
    private checkPassword;
}
export default authService;
