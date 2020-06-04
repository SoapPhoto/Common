import { Request, Response } from 'express';
import { UserService } from '@server/modules/user/user.service';
import { RedisService } from 'nestjs-redis';
import { OauthType } from '@common/enum/router';
import { AccessTokenService } from '../access-token/access-token.service';
import { ClientService } from '../client/client.service';
export declare class OauthServerService {
    private readonly clientService;
    private readonly userService;
    private readonly accessTokenService;
    private readonly redisService;
    server: any;
    private getAccessToken;
    private getRefreshToken;
    constructor(clientService: ClientService, userService: UserService, accessTokenService: AccessTokenService, redisService: RedisService);
    generateOauthToken: (req: Request<import("_@types_express-serve-static-core@4.17.7@@types/express-serve-static-core").ParamsDictionary, any, any, import("_@types_qs@6.9.3@@types/qs").ParsedQs>, res: Response<any>, type: OauthType) => Promise<{
        user: Object;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: string | number | symbol): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: string | number | symbol): boolean;
    }>;
    private getClient;
    private saveToken;
    private verifyScope;
    private revokeToken;
    private getUser;
    private generateAccessToken;
    private generateRefreshToken;
}
