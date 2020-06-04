import { NestMiddleware } from '@nestjs/common';
import { OauthServerService } from '@server/modules/oauth/oauth-server/oauth-server.service';
import { Response } from 'express';
export declare class OauthMiddleware implements NestMiddleware {
    private readonly oauthServerService;
    constructor(oauthServerService: OauthServerService);
    use(req: any, res: Response, next: () => void): Promise<void>;
}
