import { NestSchedule } from 'nest-schedule';
import { PictureService } from './picture.service';
import { RedisManager } from '@liaoliaots/nestjs-redis';
export declare class PictureScheduleService extends NestSchedule {
    private readonly pictureService;
    private readonly redisManager;
    constructor(pictureService: PictureService, redisManager: RedisManager);
    cron(): Promise<void>;
}
