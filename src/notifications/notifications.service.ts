import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import User from '../schemas/user.schema';
import Appointment from '../schemas/appointment.schema';
import Clinic from 'src/schemas/clinic.schema';
import { truncateSync } from 'fs';
import { Expo } from 'expo-server-sdk';

@Injectable()
export class NotificationsService {

    expo = new Expo({accessToken: "asdasds"})

    constructor() {
        
    }

    public async pushNotifications(notificationsDTO) {
    }
}

export default NotificationsService