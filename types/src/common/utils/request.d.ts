import { Request } from 'express';
import { PaginationDto } from '../dto/pagination.dto';
export declare const clientInfo: (req: Request<import("_@types_express-serve-static-core@4.17.7@@types/express-serve-static-core").ParamsDictionary, any, any, import("_@types_qs@6.9.3@@types/qs").ParsedQs>) => {
    agent: string;
    referrer: string;
    ip: string;
    screen: {
        width: string;
        height: string;
    };
};
export declare const listRequest: <Q extends Pick<PaginationDto, "timestamp" | "page" | "pageSize" | "lastTimestamp" | "lastTime">, T>(query: Q, data: T, count: number) => {
    count: number;
    data: T;
    page: number;
    pageSize: number;
    timestamp: number;
};
