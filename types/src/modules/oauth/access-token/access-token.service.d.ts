import { Repository } from 'typeorm';
import { UserService } from '@server/modules/user/user.service';
import { AccessTokenEntity } from './access-token.entity';
export declare class AccessTokenService {
    private accessTokenRepository;
    private readonly userService;
    constructor(accessTokenRepository: Repository<AccessTokenEntity>, userService: UserService);
    create: (data: Partial<AccessTokenEntity>) => Promise<{
        user: Object;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: string | number | symbol): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: string | number | symbol): boolean;
    }>;
    getRefreshToken: (refreshToken: string) => Promise<AccessTokenEntity>;
    getAccessToken: (accessToken: string) => Promise<AccessTokenEntity>;
    clearUserTokenAll(userId: number): Promise<import("typeorm").DeleteResult>;
}
