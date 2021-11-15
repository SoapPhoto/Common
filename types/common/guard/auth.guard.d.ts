import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OauthServerService } from '../../modules/oauth/oauth-server/oauth-server.service';
export declare class AuthGuard implements CanActivate {
    private readonly oauthServerService;
    private readonly reflector;
    constructor(oauthServerService: OauthServerService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
