import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { OauthServerService } from '@server/modules/oauth/oauth-server/oauth-server.service';
export declare class GraphqlService implements GqlOptionsFactory {
    private readonly oauthServerService;
    constructor(oauthServerService: OauthServerService);
    createGqlOptions(): Promise<GqlModuleOptions>;
}
