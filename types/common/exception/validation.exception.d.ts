import { HttpException } from '@nestjs/common';
export declare class ValidationException extends HttpException {
    constructor(param: string, message: string);
}
