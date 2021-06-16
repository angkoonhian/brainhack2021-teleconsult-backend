import { Inject, Injectable, Render } from '@nestjs/common';
import { Model } from 'mongoose';
import User from '../schemas/user.schema';
import Appointment from '../schemas/appointment.schema';
import Clinic from 'src/schemas/clinic.schema';
import axios from 'axios'

@Injectable()
export class NotificationsService {

    constructor() {}

    public async pushNotifications(notificationsDTO) {
        await axios.post("https://exp.host/--/api/v2/push/send",
        {
            to: notificationsDTO.pushToken,
            title: notificationsDTO.title,
            body: notificationsDTO.body
        },
        {
            headers: {
                'host': 'exp.host',
                'accept': 'application/json',
               'accept-encoding': 'gzip, deflate',
                'content-type': 'application/json'
            }
        }).then(response => {
            console.log(response)
        })
        
    }
}

export default NotificationsService