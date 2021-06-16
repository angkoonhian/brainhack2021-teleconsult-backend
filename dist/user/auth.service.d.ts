export declare class authService {
    constructor();
    loginService(username: any, password: any): Promise<{
        userId: string;
        token: any;
        tokenExpiration: string;
    }>;
    updatePushToken(userId: any, pushToken: any): Promise<import("../schemas/user.schema").Iuser>;
    getOneUserName(userId: any): Promise<string>;
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
