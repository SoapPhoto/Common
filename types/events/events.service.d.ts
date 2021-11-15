import { OauthServerService } from '../modules/oauth/oauth-server/oauth-server.service';
import { RedisManager } from '@liaoliaots/nestjs-redis';
import { UserEntity } from '../modules/user/user.entity';
import { NotificationService } from '../modules/notification/notification.service';
export declare class EventsService {
    private readonly oauthServerService;
    private readonly redisManager;
    private readonly notificationService;
    constructor(oauthServerService: OauthServerService, redisManager: RedisManager, notificationService: NotificationService);
    getUserLoginInfo(cookie: string): Promise<UserEntity>;
    login(clientId: string, user: UserEntity): Promise<void>;
    logout(clientId: string): Promise<void>;
    getClientId(userId: number): Promise<string[]>;
    getUnReadCount: (user: UserEntity) => Promise<number>;
}
