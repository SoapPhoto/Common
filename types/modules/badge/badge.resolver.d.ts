import { BadgeType } from '../../../enum/badge';
import { UserEntity } from '../user/user.entity';
import { BadgeService } from './badge.service';

export declare class BadgeResolver {
  private readonly badgeService;

  constructor(badgeService: BadgeService);

  addBadge(user: UserEntity, type: BadgeType, badgeId: number, targetId: number): Promise<{
        done: boolean;
    }>;

  getBadges(type: BadgeType, targetId: number): Promise<import('./badge.entity').BadgeEntity[]>;
}
