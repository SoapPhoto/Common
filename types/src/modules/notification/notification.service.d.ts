import { EntityManager, Repository } from 'typeorm';
import { EventsGateway } from '@server/events/events.gateway';
import { UserEntity } from '@server/modules/user/user.entity';
import { NotificationEntity } from './notification.entity';
import { NotificationSubscribersUserEntity } from './subscribers-user/subscribers-user.entity';
import { PictureService } from '../picture/picture.service';
import { SubscribersUserService } from './subscribers-user/subscribers-user.service';
import { CommentService } from '../comment/comment.service';
import { UserService } from '../user/user.service';
export declare class NotificationService {
    private wss;
    private notificationRepository;
    private subscribersUserRepository;
    private readonly pictureService;
    private readonly commentService;
    private readonly userService;
    private readonly subscribersService;
    pubSub: import("graphql-redis-subscriptions").RedisPubSub;
    constructor(wss: EventsGateway, notificationRepository: Repository<NotificationEntity>, subscribersUserRepository: Repository<NotificationSubscribersUserEntity>, pictureService: PictureService, commentService: CommentService, userService: UserService, subscribersService: SubscribersUserService);
    publishNotification: (publisher: UserEntity, subscribers: UserEntity, data: Pick<NotificationEntity, "type" | "category" | "mediaId">, entityManager?: EntityManager) => Promise<void>;
    getList(user: UserEntity): Promise<Object[]>;
    setNotificationItemMedia: (notify: NotificationEntity, user: UserEntity) => Promise<import("../comment/comment.entity").CommentEntity | UserEntity | import("../picture/picture.entity").PictureEntity>;
    getUnReadCount: (user: UserEntity) => Promise<number>;
    markNotificationReadAll: (user: UserEntity) => Promise<void>;
}
