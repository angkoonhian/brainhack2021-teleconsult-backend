import AppointmentService from './appointment.service';
import { newAppointmentDTO } from './model/appointment.model';
export declare class appointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    getPatientAppointments(patientId: string): Promise<import("../schemas/appointment.schema").Iappointment[]>;
    getClinicAppointments(clinicId: string): Promise<import("../schemas/appointment.schema").Iappointment[]>;
    createAppointments(newAppointmentDTO: newAppointmentDTO): Promise<{
        patientId: any;
        clinicId: any;
        date: any;
        time: any;
        content: any;
        readStatus: boolean;
        status: string;
        patientRemove: boolean;
        clinicRemove: boolean;
    }>;
    deletePatientAppointments(appointmentId: string): Promise<import("../schemas/appointment.schema").Iappointment>;
    deleteClinicAppointments(appointmentId: string): Promise<import("../schemas/appointment.schema").Iappointment>;
}
