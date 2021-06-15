export declare class clinicService {
    constructor();
    loginService(username: any, password: any): Promise<{
        userId: string;
        token: any;
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
export default clinicService;
