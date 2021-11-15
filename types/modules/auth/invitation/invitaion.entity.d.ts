import { BaseEntity } from '../../../common/base.entity';
import { UserEntity } from '../../user/user.entity';
export declare class AuthInvitationCodeEntity extends BaseEntity {
    readonly id: number;
    creator: UserEntity;
    key: string;
    user?: UserEntity;
}
