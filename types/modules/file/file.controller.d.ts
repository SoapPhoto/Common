import { QiniuService } from '../../shared/qiniu/qiniu.service';
import { Request } from 'express';
import { OssService } from '../../shared/oss/oss.service';
import { FileService } from './file.service';
import { CreateFileDot, GetTokenDot, CreateOssFileDot } from './dto/file.dto';
import { UserEntity } from '../user/user.entity';
export declare class FileController {
    private readonly qiniuService;
    private readonly ossService;
    private readonly fileService;
    constructor(qiniuService: QiniuService, ossService: OssService, fileService: FileService);
    getUploadToken(callbackData: GetTokenDot, user: UserEntity): string;
    getOssSts(): Promise<import("../../shared/oss/oss.interface").ISts>;
    uploadOssCallback(req: Request, data: CreateOssFileDot): Promise<{
        key: string;
    }>;
    uploadCallback(data: CreateFileDot, req: Request, token: string): Promise<void>;
}
