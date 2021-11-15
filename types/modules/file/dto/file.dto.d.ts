import { FileEntity } from '../file.entity';
import { FileType } from '../enum/type.enum';
export declare class CreateFileDot implements Partial<FileEntity> {
    key: string;
    hash?: string;
    userId: number;
    type: FileType;
    originalname: string;
    size: number;
    mimetype: string;
    bucket?: string;
}
export declare class CreateOssFileDot implements Partial<FileEntity> {
    object: string;
    userId: number;
    type: FileType;
    originalname: string;
    size: number;
    mimetype: string;
    bucket: string;
}
export declare class GetTokenDot {
    type: FileType;
}
