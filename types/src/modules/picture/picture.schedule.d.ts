import { NestSchedule } from 'nest-schedule';
import { PictureService } from '@server/modules/picture/picture.service';
import { RedisService } from 'nestjs-redis';
export declare class PictureScheduleService extends NestSchedule {
    private readonly pictureService;
    private readonly redisService;
    constructor(pictureService: PictureService, redisService: RedisService);
    cron(): Promise<void>;
}
