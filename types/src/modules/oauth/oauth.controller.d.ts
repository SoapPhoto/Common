import { Request, Response } from 'express';
import { OauthType } from '@common/enum/router';
import { LoggingService } from '@server/shared/logging/logging.service';
import { OauthServerService } from './oauth-server/oauth-server.service';
import { OauthService } from './oauth.service';
import { OauthQueryDto, ActiveUserDto } from './dto/oauth.dto';
export declare class OauthController {
    private readonly logger;
    private readonly oauthServerService;
    private readonly oauthService;
    constructor(logger: LoggingService, oauthServerService: OauthServerService, oauthService: OauthService);
    accessToken(req: Request, res: Response): Promise<void>;
    oauthToken(type: OauthType, req: Request, res: Response): Promise<void>;
    oauthRedirect(type: OauthType, query: OauthQueryDto, res: Response): Promise<void>;
    active(body: ActiveUserDto, req: Request, res: Response): Promise<void>;
    private token;
}
