import { BaseEntity } from '../../common/base.entity';
import { FileType } from './enum/type.enum';
import { UserEntity } from '../user/user.entity';
import { PictureEntity } from '../picture/picture.entity';
export declare class FileEntity extends BaseEntity {
    readonly key: string;
    type: FileType;
    readonly user?: UserEntity;
    readonly picture?: PictureEntity;
    active: boolean;
    readonly hash: string;
    readonly bucket?: string;
    readonly originalname: string;
    readonly mimetype: string;
    readonly size: number;
}
