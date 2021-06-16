import * as mongoose from 'mongoose';
export interface Iclinic extends mongoose.Document {
    _id: string;
    clinicName: string;
    password: string;
    email: string;
    phoneNumber: string;
    address: string;
    doctors: [string];
    appointments: [string];
    notifications: [string];
}
export declare const ClinicSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
declare const Clinic: mongoose.Model<Iclinic, {}, {}>;
export default Clinic;
