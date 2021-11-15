import DataLoader from 'dataloader';
import { NestDataLoader } from '../../shared/graphql/loader/loader.interceptor';
import { BadgeEntity } from './badge.entity';
import { PictureBadgeActivityService } from './picture-badge-activity/picture-badge-activity.service';
export declare class BadgePictureLoader implements NestDataLoader<number, BadgeEntity> {
    private readonly pictureBadgeActivityService;
    constructor(pictureBadgeActivityService: PictureBadgeActivityService);
    generateDataLoader(): DataLoader<number, BadgeEntity>;
}
