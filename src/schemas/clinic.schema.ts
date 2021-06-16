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

const Schema = mongoose.Schema

export const ClinicSchema = new mongoose.Schema({
    clinicName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    doctors: [
        {
            type: String,
            required: true
        }
    ],
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ],
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'notifications'
        }
    ]
})

const Clinic = mongoose.model<Iclinic>('clinics', ClinicSchema);
export default Clinic