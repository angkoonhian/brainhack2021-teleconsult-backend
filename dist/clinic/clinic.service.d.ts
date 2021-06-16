export declare class clinicService {
    constructor();
    loginService(username: any, password: any): Promise<{
        userId: string;
        token: any;
        tokenExpiration: string;
    }>;
    updatePushToken(pushTokenDTO: any): Promise<import("../schemas/clinic.schema").Iclinic>;
    getOneClinicDoctors(clinicId: any): Promise<[string]>;
    registerService(userDTO: any): Promise<{
        username: any;
        password: any;
        email: any;
        phoneNumber: any;
        address: any;
        appointments: any[];
    }>;
    getAllClinicsService(): Promise<import("../schemas/clinic.schema").Iclinic[]>;
    getOneClinicService(clinidId: any): Promise<import("../schemas/clinic.schema").Iclinic>;
    private getSignedJwtToken;
    private hashPassword;
    private checkPassword;
}
export default clinicService;
