import { Request } from 'express';
import { PaginationDto } from '../dto/pagination.dto';
export declare const clientInfo: (req: Request) => {
    agent: string | undefined;
    referrer: string | undefined;
    ip: string | undefined;
    screen: {
        width: string;
        height: string;
    };
};
export declare const listRequest: <Q extends Omit<PaginationDto, "time">, T>(query: Q, data: T, count: number) => {
    count: number;
    data: T;
    page: number;
    pageSize: number;
    timestamp: number;
};
