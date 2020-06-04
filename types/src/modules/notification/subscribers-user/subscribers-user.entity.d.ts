import { BaseEntity } from '@server/common/base.entity';
import { UserEntity } from '@server/modules/user/user.entity';
import { NotificationEntity } from '../notification.entity';
export declare class NotificationSubscribersUserEntity extends BaseEntity {
    id: number;
    /** 是否已读 */
    read: boolean;
    notification: NotificationEntity;
    user: UserEntity;
}
