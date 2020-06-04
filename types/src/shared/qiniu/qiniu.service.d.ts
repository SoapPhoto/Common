import qiniu from 'qiniu';
import { File } from '../../common/interface/file.interface';
export declare class QiniuService {
    private config;
    private baseCallbackBody;
    uploadFile(file: File): Promise<{
        hash: string;
        key: string;
    }>;
    createToken(callbackData?: Record<string, string | number>): string;
    createBucketManager(): qiniu.rs.BucketManager;
    deleteFile(key: string): Promise<unknown>;
    isQiniuCallback(url: string, authorization: string): boolean;
    fetch(url: string, key: string): Promise<any>;
}
