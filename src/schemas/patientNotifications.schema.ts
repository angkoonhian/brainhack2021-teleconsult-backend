import * as mongoose from 'mongoose';

export interface IpatientNoti extends mongoose.Document {
    _id: string;
    patientId: string;
    appointments: [string];
}

const Schema = mongoose.Schema

export const PatientNotificationSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ]
})

const PatientNotifications = mongoose.model<IpatientNoti>('notifications', PatientNotificationSchema)
export default PatientNotifications