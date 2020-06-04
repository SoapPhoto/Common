import { Repository } from 'typeorm';
import { UserEntity } from '@server/modules/user/user.entity';
import { UserBadgeActivityEntity } from './user-badge-activity.entity';
export declare class UserBadgeActivityService {
    private activityRepository;
    constructor(activityRepository: Repository<UserBadgeActivityEntity>);
    get metadata(): import("typeorm").EntityMetadata;
    isExist(badgeId: number, userId: number): Promise<boolean>;
    addBadge(user: UserEntity, badgeId: number, userId: number): Promise<UserBadgeActivityEntity>;
}
