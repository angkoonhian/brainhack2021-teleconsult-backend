import { boolean } from 'joi';
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

const Schema = mongoose.Schema

export const AppointmentSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    clinicId: {
        type: Schema.Types.ObjectId,
        ref: 'clinics'
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    doctorsName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    readStatus: {
        type: Boolean,
        required: true,
    },
    consultType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    patientRemoved: {
        type: String,
        required: true,
    },
    clinicRemoved: {
        type: String,
        required: true,
    }
})

const Appointment = mongoose.model<Iappointment>('appointments', AppointmentSchema);
export default Appointment