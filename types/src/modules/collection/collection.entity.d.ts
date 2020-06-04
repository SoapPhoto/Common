import { BaseEntity } from '@server/common/base.entity';
import { UserEntity } from '@server/modules/user/user.entity';
import { PictureEntity } from '@server/modules/picture/picture.entity';
import { CollectionPictureEntity } from './picture/collection-picture.entity';
export declare class CollectionEntity extends BaseEntity {
    readonly id: number;
    /** 收藏夹名字 */
    readonly name: string;
    /** 收藏介绍 */
    readonly bio: string;
    /** 收藏夹是否是私人 */
    readonly isPrivate: boolean;
    /** 收藏夹作者 */
    readonly user: UserEntity;
    info: CollectionPictureEntity[];
    get preview(): PictureEntity[];
    /** 用户的picture数量 */
    pictureCount: number;
}
