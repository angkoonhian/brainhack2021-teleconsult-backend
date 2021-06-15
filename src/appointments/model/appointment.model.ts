export class appointmentDTO {
    patientId: string;
    clinicId: string;
    dateTime: Date;
    content: string;
    readStatus: boolean;
    status: string;
}

export class newAppointmentDTO {
    patientId: string;
    clinicId: string;
    content: string;
}