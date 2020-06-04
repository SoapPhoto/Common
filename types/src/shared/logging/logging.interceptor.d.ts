import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private readonly logger;
    constructor(logger: LoggingService);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>;
}
