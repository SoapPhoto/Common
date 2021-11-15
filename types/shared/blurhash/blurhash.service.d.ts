import { RedisManager } from '@liaoliaots/nestjs-redis';
export declare class BlurhashService {
    private readonly redisManager;
    constructor(redisManager: RedisManager);
    getBase64(hash: string, width: number, height: number): Promise<string>;
}
