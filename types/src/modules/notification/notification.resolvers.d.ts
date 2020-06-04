import { UserEntity } from '@server/modules/user/user.entity';
import { NotificationService } from './notification.service';
export declare class NotificationResolver {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    userNotification(user: UserEntity): Promise<Object[]>;
    unreadNotificationCount(user: UserEntity): Promise<{
        count: number;
    }>;
    newNotification(): Promise<AsyncIterator<unknown, any, undefined>>;
    markNotificationReadAll(user: UserEntity): Promise<void>;
}
export declare class NotificationMediaResolver {
    resolveType(parent: any): Promise<"Comment" | "Picture">;
}
