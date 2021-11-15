import { Request } from 'express';
import { ISts } from './oss.interface';
export declare class OssService {
    private sts;
    private expirationTime;
    getSts(): Promise<ISts>;
    isOssCallback(data: any, req: Request): Promise<void>;
}
