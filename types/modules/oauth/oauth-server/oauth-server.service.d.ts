import { Request, Response } from 'express';
import { UserService } from '../../user/user.service';
import { RedisManager } from '@liaoliaots/nestjs-redis';
import { OauthType } from '../../../../enum/router';
import { AccessTokenService } from '../access-token/access-token.service';
import { ClientService } from '../client/client.service';
export declare class OauthServerService {
    private readonly clientService;
    private readonly userService;
    private readonly accessTokenService;
    private readonly redisManager;
    server: any;
    private getAccessToken;
    private getRefreshToken;
    constructor(clientService: ClientService, userService: UserService, accessTokenService: AccessTokenService, redisManager: RedisManager);
    generateOauthToken: (req: Request, res: Response, type: OauthType) => Promise<{
        user: Record<string, any>;
    }>;
    private getClient;
    private saveToken;
    private verifyScope;
    private revokeToken;
    private getUser;
    private generateAccessToken;
    private generateRefreshToken;
}
