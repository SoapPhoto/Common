import DataLoader from 'dataloader';
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Observable } from 'rxjs';
/**
 * This interface will be used to generate the initial data loader.
 * The concrete implementation should be added as a provider to your module.
 */
export interface INestDataLoader<ID, Type> {
    /**
       * Should return a new instance of dataloader each time
       */
    generateDataLoader(): DataLoader<ID, Type>;
}
/**
 * Context key where get loader function will be stored.
 * This class should be added to your module providers like so:
 * {
 *     provide: APP_INTERCEPTOR,
 *     useClass: DataLoaderInterceptor,
 * },
 */
export declare const NEST_LOADER_CONTEXT_KEY = "NEST_LOADER_CONTEXT_KEY";
export declare class DataLoaderInterceptor implements NestInterceptor {
    private readonly moduleRef;
    constructor(moduleRef: ModuleRef);
    /**
       * @inheritdoc
       */
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
