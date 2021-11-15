import { NotificationService } from './notification.service';
import { UserEntity } from '../user/user.entity';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getNotificationList(user: UserEntity): Promise<Record<string, any>[]>;
    markNotificationReadAll(user: UserEntity): Promise<void>;
}
