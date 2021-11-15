import { BaseEntity } from '../../common/base.entity';
import { UserEntity } from '../user/user.entity';
import { PictureEntity } from '../picture/picture.entity';
import { CollectionPictureEntity } from './picture/collection-picture.entity';
export declare class CollectionEntity extends BaseEntity {
    readonly id: number;
    readonly name: string;
    readonly bio: string;
    readonly isPrivate: boolean;
    readonly user: UserEntity;
    info: CollectionPictureEntity[];
    get preview(): PictureEntity[];
    pictureCount: number;
}
