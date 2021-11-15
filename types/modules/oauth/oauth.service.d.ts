import { RedisManager } from '@liaoliaots/nestjs-redis';
import { OauthStateType, OauthActionType } from '../../../enum/oauthState';
import { OauthType } from '../../../enum/router';
import { ClientService } from './client/client.service';
import { IOauthUserInfo } from '../user/user.interface';
import { UserService } from '../user/user.service';
import { CredentialsService } from '../credentials/credentials.service';
import { OauthQueryDto, ActiveUserDto } from './dto/oauth.dto';
import { CredentialsEntity } from '../credentials/credentials.entity';
import { UserEntity } from '../user/user.entity';
export declare class OauthService {
    private readonly redisManager;
    private readonly clientService;
    private readonly userService;
    private readonly credentialsService;
    private github_authorize;
    private weibo_authorize;
    private google_authorize;
    constructor(redisManager: RedisManager, clientService: ClientService, userService: UserService, credentialsService: CredentialsService);
    github({ code, state }: OauthQueryDto): Promise<{
        code: string;
        action: OauthActionType;
    } | null>;
    google({ code, state }: OauthQueryDto): Promise<{
        code: string;
        action: OauthActionType;
    } | null>;
    weibo({ code, state }: OauthQueryDto): Promise<{
        code: string;
        action: OauthActionType;
    } | null>;
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
