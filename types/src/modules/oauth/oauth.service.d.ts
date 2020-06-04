import { RedisService } from 'nestjs-redis';
import { OauthStateType, OauthActionType } from '@common/enum/oauthState';
import { OauthType } from '@common/enum/router';
import { ClientService } from './client/client.service';
import { IOauthUserInfo } from '../user/user.interface';
import { UserService } from '../user/user.service';
import { CredentialsService } from '../credentials/credentials.service';
import { OauthQueryDto, ActiveUserDto } from './dto/oauth.dto';
import { CredentialsEntity } from '../credentials/credentials.entity';
import { UserEntity } from '../user/user.entity';
export declare class OauthService {
    private readonly redisService;
    private readonly clientService;
    private readonly userService;
    private readonly credentialsService;
    private github_authorize;
    private weibo_authorize;
    private google_authorize;
    constructor(redisService: RedisService, clientService: ClientService, userService: UserService, credentialsService: CredentialsService);
    github({ code, state }: OauthQueryDto): Promise<{
        code: string;
        action: OauthActionType;
    }>;
    google({ code, state }: OauthQueryDto): Promise<{
        code: string;
        action: OauthActionType;
    }>;
    weibo({ code, state }: OauthQueryDto): Promise<{
        code: string;
        action: OauthActionType;
    }>;
    saveOauthInfo(code: string, state: OauthStateType, type: OauthType, id: number, data: IOauthUserInfo): Promise<{
        code: string;
        action: OauthActionType;
    } | null>;
    verifyUser(type: OauthType, id: number, data: IOauthUserInfo): Promise<CredentialsEntity>;
    activeUser({ code, ...userInfo }: ActiveUserDto): Promise<{
        type: any;
        user: UserEntity;
    }>;
}
