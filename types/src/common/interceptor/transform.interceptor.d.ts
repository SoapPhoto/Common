import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
export declare class TransformInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler<any>): import("rxjs").Observable<Object>;
}
