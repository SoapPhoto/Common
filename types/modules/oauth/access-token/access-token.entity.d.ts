import { BaseEntity } from '../../../common/base.entity';
import { UserEntity } from '../../user/user.entity';
import { ClientEntity } from '../client/client.entity';
export declare class AccessTokenEntity extends BaseEntity {
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly accessTokenExpiresAt: Date;
    readonly refreshTokenExpiresAt: Date;
    user: UserEntity;
    readonly client: ClientEntity;
}
