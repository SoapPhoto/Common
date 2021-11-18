import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { OauthServerService } from '../../modules/oauth/oauth-server/oauth-server.service';
import { RedisManager } from '@liaoliaots/nestjs-redis';
export declare class GraphqlService implements GqlOptionsFactory {
    private readonly oauthServerService;
    private readonly redisManager;
    constructor(oauthServerService: OauthServerService, redisManager: RedisManager);
    createGqlOptions(): Promise<GqlModuleOptions>;
}
