import { Repository } from 'typeorm';
import { UserService } from '../../user/user.service';
import { AccessTokenEntity } from './access-token.entity';
export declare class AccessTokenService {
    private accessTokenRepository;
    private readonly userService;
    constructor(accessTokenRepository: Repository<AccessTokenEntity>, userService: UserService);
    create: (data: Partial<AccessTokenEntity>) => Promise<{
        user: Record<string, any>;
    }>;
    getRefreshToken: (refreshToken: string) => Promise<AccessTokenEntity | undefined>;
    getAccessToken: (accessToken: string) => Promise<AccessTokenEntity | undefined>;
    clearUserTokenAll(userId: number): Promise<import("typeorm").DeleteResult>;
}
