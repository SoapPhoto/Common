import { QiniuService } from '@server/shared/qiniu/qiniu.service';
import { Request } from 'express';
import { FileService } from './file.service';
import { CreateFileDot, GetTokenDot } from './dto/file.dto';
import { UserEntity } from '../user/user.entity';
export declare class FileController {
    private readonly qiniuService;
    private readonly fileService;
    constructor(qiniuService: QiniuService, fileService: FileService);
    getUploadToken(callbackData: GetTokenDot, user: UserEntity): string;
    uploadCallback(data: CreateFileDot, req: Request, token: string): Promise<void>;
}
