export class appointmentDTO {
    patientId: string;
    clinicId: string;
    dateTime: Date;
    doctorsName: string;
    content: string;
    readStatus: boolean;
    status: string;
}

export class newAppointmentDTO {
    patientId: string;
    clinicId: string;
    content: string;
    doctorsName: string;
}