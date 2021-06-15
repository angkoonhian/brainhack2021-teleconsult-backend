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