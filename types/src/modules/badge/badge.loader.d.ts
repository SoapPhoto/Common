import DataLoader from 'dataloader';
import { INestDataLoader } from '@server/shared/graphql/loader/loader.interceptor';
import { BadgeService } from './badge.service';
import { BadgeEntity } from './badge.entity';
import { PictureBadgeActivityService } from './picture-badge-activity/picture-badge-activity.service';
export declare class BadgeUserLoader implements INestDataLoader<number, BadgeEntity> {
    private readonly badgeService;
    constructor(badgeService: BadgeService);
    generateDataLoader(): DataLoader<number, BadgeEntity>;
}
export declare class BadgePictureLoader implements INestDataLoader<number, BadgeEntity> {
    private readonly pictureBadgeActivityService;
    constructor(pictureBadgeActivityService: PictureBadgeActivityService);
    generateDataLoader(): DataLoader<number, BadgeEntity>;
}
