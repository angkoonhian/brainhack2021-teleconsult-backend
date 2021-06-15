import * as mongoose from 'mongoose';

export interface IclinicNoti extends mongoose.Document {
    _id: string;
    clinicId: string;
    appointments: [string];
}

const Schema = mongoose.Schema

export const ClinicNotificationSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'clinic'
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ]
})

const ClinicNotifications = mongoose.model<IclinicNoti>('notifications', ClinicNotificationSchema)
export default ClinicNotifications