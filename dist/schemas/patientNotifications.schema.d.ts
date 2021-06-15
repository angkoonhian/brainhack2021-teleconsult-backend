import * as mongoose from 'mongoose';
export interface IpatientNoti extends mongoose.Document {
    _id: string;
    patientId: string;
    appointments: [string];
}
export declare const PatientNotificationSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
declare const PatientNotifications: mongoose.Model<IpatientNoti, {}, {}>;
export default PatientNotifications;
