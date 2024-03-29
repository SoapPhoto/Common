import { LoggerService } from '@nestjs/common';
export declare class LoggingService implements LoggerService {
    private readonly logDir;
    private readonly logger;
    constructor();
    debug(message: any, context?: string): any;
    error(message: any, trace?: string, context?: string): any;
    log(message: any, context?: string): any;
    verbose(message: any, context?: string): any;
    warn(message: any, context?: string): any;
    private getLogMessage;
}
export declare const Logger: LoggingService;
