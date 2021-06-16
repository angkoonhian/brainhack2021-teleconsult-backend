import notificationsService from './notifications.service';
import { notificationsDTO } from './model/notifications.model';
export declare class userController {
    private readonly notificationsService;
    constructor(notificationsService: notificationsService);
    Register(notificationsDTO: notificationsDTO): Promise<void>;
}
