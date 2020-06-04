import { OauthServerService } from '@server/modules/oauth/oauth-server/oauth-server.service';
import { RedisService } from 'nestjs-redis';
import { UserEntity } from '@server/modules/user/user.entity';
import { NotificationService } from '@server/modules/notification/notification.service';
export declare class EventsService {
    private readonly oauthServerService;
    private readonly redisService;
    private readonly notificationService;
    constructor(oauthServerService: OauthServerService, redisService: RedisService, notificationService: NotificationService);
    getUserLoginInfo(cookie: string): Promise<UserEntity>;
    login(clientId: string, user: UserEntity): Promise<void>;
    logout(clientId: string): Promise<void>;
    getClientId(userId: number): Promise<string[]>;
    getUnReadCount: (user: UserEntity) => Promise<number>;
}
