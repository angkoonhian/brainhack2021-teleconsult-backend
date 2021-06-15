import { boolean } from 'joi';
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
    dateTime: {
        type: Date,
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
    status: {
        tyoe: String,
        required: true,
    }
})

const Appointment = mongoose.model<Iappointment>('appointments', AppointmentSchema);
export default Appointment