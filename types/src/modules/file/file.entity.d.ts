import { BaseEntity } from '@server/common/base.entity';
import { FileType } from './enum/type.enum';
import { UserEntity } from '../user/user.entity';
import { PictureEntity } from '../picture/picture.entity';
export declare class FileEntity extends BaseEntity {
    readonly key: string;
    type: FileType;
    readonly user?: UserEntity;
    readonly picture?: PictureEntity;
    active: boolean;
    /** 七牛的hash */
    readonly hash: string;
    /** 图片原始文件名 */
    readonly originalname: string;
    /** 图片类型 */
    readonly mimetype: string;
    /** 图片大小 */
    readonly size: number;
}
