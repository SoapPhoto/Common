import { BaseEntity } from '@server/common/base.entity';
import { PictureEntity } from '@server/modules/picture/picture.entity';
import { UserEntity } from '@server/modules/user/user.entity';
import { CollectionEntity } from '../collection.entity';
export declare class CollectionPictureEntity extends BaseEntity {
    readonly id: number;
    collection: CollectionEntity;
    picture: PictureEntity;
    user: UserEntity;
}
