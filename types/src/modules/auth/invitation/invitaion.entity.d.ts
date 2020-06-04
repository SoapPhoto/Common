import { BaseEntity } from '@server/common/base.entity';
import { UserEntity } from '@server/modules/user/user.entity';
export declare class AuthInvitationCodeEntity extends BaseEntity {
    readonly id: number;
    creator: UserEntity;
    key: string;
    user?: UserEntity;
}
