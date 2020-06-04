import { BaseEntity } from '@server/common/base.entity';
export declare class PictureBadgeActivityEntity extends BaseEntity {
    readonly id: number;
    readonly badgeId: number;
    readonly pictureId: number;
    readonly createUserId: number;
}
