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

    constructor() {}

    public async pushNotifications(notificationsDTO) {
        let messages = [];
        // Check if token is valid or not
        if (!Expo.isExpoPushToken(notificationsDTO.pushToken)) {
            console.error(`Push token is not a valid Expo push token`);
            return;
        }
        // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
        messages.push({
            to: notificationsDTO.pushToken,
            sound: 'default',
            body: 'test notifications',
            data: {withSome: 'data'}
        })
        // Store messages in chunk
        let chunks = this.expo.chunkPushNotifications(messages)
        // Define tickets array
        let tickets = [];
        // Push notifications to user
        for (let chunk of chunks) {
            try {
                let ticketChunk = await this.expo.sendPushNotificationsAsync(chunk)
                console.log(ticketChunk);
                tickets.push(...ticketChunk);
            } catch (err) {
                throw err
            }
        }
    }
}

export default NotificationsService