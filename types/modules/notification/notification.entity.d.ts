import { BaseEntity } from '../../common/base.entity';
import { UserEntity } from '../user/user.entity';
import { NotificationType, NotificationCategory } from '../../../enum/notification';
import { NotificationSubscribersUserEntity } from './subscribers-user/subscribers-user.entity';
import { PictureEntity } from '../picture/picture.entity';
import { CommentEntity } from '../comment/comment.entity';
import { CollectionEntity } from '../collection/collection.entity';
export declare class NotificationEntity extends BaseEntity {
    id: number;
    readonly publisher: UserEntity;
    readonly category: NotificationCategory;
    mediaId?: number;
    readonly type: NotificationType;
    readonly subscribers: NotificationSubscribersUserEntity[];
    media?: PictureEntity | CommentEntity | CollectionEntity | UserEntity;
    get comment(): CommentEntity | undefined;
    get picture(): PictureEntity | undefined;
    get user(): UserEntity | undefined;
    read: boolean;
}
