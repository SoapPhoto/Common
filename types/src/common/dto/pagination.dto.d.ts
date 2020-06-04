export declare class PaginationDto {
    readonly page: number;
    readonly pageSize: number;
    readonly timestamp?: number;
    readonly lastTimestamp?: number;
    get lastTime(): string;
    get time(): string;
}
