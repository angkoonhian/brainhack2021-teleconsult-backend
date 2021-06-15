import * as mongoose from 'mongoose';
export interface IclinicNoti extends mongoose.Document {
    _id: string;
    clinicId: string;
    appointments: [string];
}
export declare const ClinicNotificationSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
declare const ClinicNotifications: mongoose.Model<IclinicNoti, {}, {}>;
export default ClinicNotifications;
