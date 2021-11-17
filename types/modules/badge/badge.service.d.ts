import { Repository } from 'typeorm';
import { BadgeType } from '../../../enum/badge';
import { PictureBadgeActivityService } from './picture-badge-activity/picture-badge-activity.service';
import { UserEntity } from '../user/user.entity';
import { BadgeEntity } from './badge.entity';
import { UserBadgeActivityService } from './user-badge-activity/user-badge-activity.service';

export declare class BadgeService {
  private readonly pictureBadgeActivityService;

  private readonly userBadgeActivityService;

  private badgeRepository;

  constructor(pictureBadgeActivityService: PictureBadgeActivityService, userBadgeActivityService: UserBadgeActivityService, badgeRepository: Repository<BadgeEntity>);

  get pictureActivityMetadata(): import('typeorm').EntityMetadata;

  get userActivityMetadata(): import('typeorm').EntityMetadata;

  addBadge(user: UserEntity, type: BadgeType, badgeId: number, targetId: number): Promise<import('./picture-badge-activity/picture-badge-activity.entity').PictureBadgeActivityEntity>;

  getBadges(type: BadgeType, targetId: number): Promise<BadgeEntity[]>;
}
