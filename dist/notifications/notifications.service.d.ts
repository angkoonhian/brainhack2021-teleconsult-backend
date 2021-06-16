import { Expo } from 'expo-server-sdk';
export declare class NotificationsService {
    expo: Expo;
    constructor();
    pushNotifications(notificationsDTO: any): Promise<void>;
}
export default NotificationsService;
