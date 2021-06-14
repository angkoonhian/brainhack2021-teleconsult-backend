import * as mongoose from 'mongoose';

export interface Iuser extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
}

const Schema = mongoose.Schema

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
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
  });

  const User = mongoose.model<Iuser>('users', UserSchema);
  export default User


