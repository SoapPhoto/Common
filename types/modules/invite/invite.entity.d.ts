import { BaseEntity } from '../../common/base.entity';
import { UserEntity } from '../user/user.entity';
export declare class InviteEntity extends BaseEntity {
    readonly id: string;
    readonly code: string;
    user: UserEntity;
}
