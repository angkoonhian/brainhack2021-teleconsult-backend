export declare class AppointmentService {
    constructor();
    getUserAppointment(patientId: any): Promise<import("../schemas/appointment.schema").Iappointment[]>;
    getClinicAppointment(clinicId: any): Promise<import("../schemas/appointment.schema").Iappointment[]>;
    createNewAppointment(appointment: any): Promise<{
        patientId: any;
        clinicId: any;
        date: any;
        time: any;
        content: any;
        doctorsName: any;
        consultType: any;
        readStatus: boolean;
        status: string;
        patientRemoved: boolean;
        clinicRemoved: boolean;
    }>;
    deletePatientAppointment(appointmentIdz: any): Promise<import("../schemas/appointment.schema").Iappointment>;
    deleteClinicAppointment(appointmentId: any): Promise<import("../schemas/appointment.schema").Iappointment>;
}
export default AppointmentService;
