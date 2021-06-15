import * as mongoose from 'mongoose';
export interface Iappointment extends mongoose.Document {
    _id: string;
    patientId: string;
    clinicId: string;
    date: string;
    time: string;
    content: string;
    readStatus: boolean;
    status: string;
    patientRemove: boolean;
    clinicRemove: boolean;
}
export declare const AppointmentSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
declare const Appointment: mongoose.Model<Iappointment, {}, {}>;
export default Appointment;
