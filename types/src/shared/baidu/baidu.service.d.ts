import { BaiduClassify, BaiduToken } from './interface/baidu.interface';
export declare class BaiduService {
    private token?;
    private expiresDate;
    getAccountToken(): Promise<BaiduToken>;
    getImageClassify(base64: string): Promise<BaiduClassify[]>;
}
