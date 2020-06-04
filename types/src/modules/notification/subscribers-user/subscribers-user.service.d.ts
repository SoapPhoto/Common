import { Repository } from 'typeorm';
import { UserEntity } from '@server/modules/user/user.entity';
import { NotificationSubscribersUserEntity } from './subscribers-user.entity';
export declare class SubscribersUserService {
    private subscribersRepository;
    constructor(subscribersRepository: Repository<NotificationSubscribersUserEntity>);
    markNotificationReadAll: (user: UserEntity) => Promise<void>;
}
