import { BaseEntity } from '@server/common/base.entity';
import { PictureEntity } from '@server/modules/picture/picture.entity';
export declare class TagEntity extends BaseEntity {
    readonly id: number;
    /** tag名称 */
    readonly name: string;
    readonly pictures: PictureEntity[];
    pictureCount: number;
}
