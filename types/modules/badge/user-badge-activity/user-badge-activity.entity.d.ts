import { BaseEntity } from '../../../common/base.entity';

export declare class UserBadgeActivityEntity extends BaseEntity {
  readonly id: number;

  readonly badgeId: number;

  readonly userId: number;

  readonly createUserId: number;
}
