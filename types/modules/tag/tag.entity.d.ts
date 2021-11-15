import { BaseEntity } from '../../common/base.entity';
import { PictureEntity } from '../picture/picture.entity';
export declare class TagEntity extends BaseEntity {
    readonly id: number;
    readonly name: string;
    readonly pictures: PictureEntity[];
    pictureCount: number;
}
