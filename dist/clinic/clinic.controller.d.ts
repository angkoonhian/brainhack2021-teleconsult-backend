import clinicService from './clinic.service';
import { clinicDTO, pushTokenDTO } from './model/clinic.model';
export declare class clinicController {
    private readonly clinicService;
    constructor(clinicService: clinicService);
    login(username: string, password: string): Promise<{
        userId: string;
        token: any;
        tokenExpiration: string;
    }>;
    Register(clinicDTO: clinicDTO): Promise<{
        username: any;
        password: any;
        email: any;
        phoneNumber: any;
        address: any;
        appointments: any[];
    }>;
    getPushToken(pushTokenDTO: pushTokenDTO): Promise<import("../schemas/clinic.schema").Iclinic>;
    getAllClinics(): Promise<import("../schemas/clinic.schema").Iclinic[]>;
    getOneClinic(clinicId: string): Promise<import("../schemas/clinic.schema").Iclinic>;
    getOneClinicDoctors(clinicId: string): Promise<[string]>;
}
