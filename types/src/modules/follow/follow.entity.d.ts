import { BaseEntity } from '@server/common/base.entity';
import { UserEntity } from '../user/user.entity';
export declare class FollowEntity extends BaseEntity {
    readonly followed_user_id: number;
    readonly follower_user_id: number;
    readonly followed: UserEntity;
    readonly follower: UserEntity;
}
