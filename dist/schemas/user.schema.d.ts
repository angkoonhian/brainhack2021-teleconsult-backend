import * as mongoose from 'mongoose';
export interface Iuser extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    appointments: [string];
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
declare const User: mongoose.Model<Iuser, {}, {}>;
export default User;
