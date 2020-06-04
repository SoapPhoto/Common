import { BaseEntity } from '../../../common/base.entity';
import { UserEntity } from '../../user/user.entity';
import { NotificationEntity } from '../notification.entity';

export declare class NotificationSubscribersUserEntity extends BaseEntity {
  id: number;

  /** 是否已读 */
  read: boolean;

  notification: NotificationEntity;

  user: UserEntity;
}
