import { BaseEntity } from '@server/common/base.entity';
import { BadgeType, BadgeRate } from '@common/enum/badge';
export declare class BadgeEntity extends BaseEntity {
    readonly id: number;
    readonly type: BadgeType;
    readonly name: string;
    readonly rate: BadgeRate;
}
