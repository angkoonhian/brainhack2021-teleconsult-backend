import { Connection } from 'mongoose';
export declare const appointmentProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document<any, any>, {}, {}>;
    inject: string[];
}[];
