import { Repository } from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { PictureBadgeActivityEntity } from './picture-badge-activity.entity';
import { BadgeEntity } from '../badge.entity';
export declare class PictureBadgeActivityService {
    private activityRepository;
    constructor(activityRepository: Repository<PictureBadgeActivityEntity>);
    get metadata(): import("typeorm").EntityMetadata;
    isExist(badgeId: number, pictureId: number): Promise<boolean>;
    addBadge(user: UserEntity, badgeId: number, pictureId: number): Promise<PictureBadgeActivityEntity>;
    findByIds(ids: readonly number[]): Promise<BadgeEntity[]>;
}
