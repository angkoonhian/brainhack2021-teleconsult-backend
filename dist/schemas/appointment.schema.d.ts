import * as mongoose from 'mongoose';
export interface Iappointment extends mongoose.Document {
    _id: string;
    patientId: string;
    clinicId: string;
    dateTime: Date;
    content: string;
    readStatus: boolean;
    status: string;
}
export declare const AppointmentSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
declare const Appointment: mongoose.Model<Iappointment, {}, {}>;
export default Appointment;
