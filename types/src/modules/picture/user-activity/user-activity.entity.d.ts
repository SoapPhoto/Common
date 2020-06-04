import { BaseEntity } from '@server/common/base.entity';
import { UserEntity } from '@server/modules/user/user.entity';
import { PictureEntity } from '../picture.entity';
export declare class PictureUserActivityEntity extends BaseEntity {
    readonly id: number;
    readonly user: UserEntity;
    readonly picture: PictureEntity;
    readonly like: boolean;
    readonly likedTime: Date;
}
