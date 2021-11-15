import { BaseEntity } from '../../../common/base.entity';
import { UserEntity } from '../../user/user.entity';
import { PictureEntity } from '../picture.entity';
export declare class PictureUserActivityEntity extends BaseEntity {
    readonly id: number;
    readonly user: UserEntity;
    readonly picture: PictureEntity;
    readonly like: boolean;
    readonly likedTime: Date;
}
