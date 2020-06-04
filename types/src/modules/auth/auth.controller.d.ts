import { Request, Response } from 'express';
import { CreateUserDto } from '@server/modules/user/dto/user.dto';
import { AuthService } from './auth.service';
import { ValidatorEmailDto, ResetPasswordDto, NewPasswordDto } from './dto/auth.dto';
import { UserEntity } from '../user/user.entity';
import { OauthServerService } from '../oauth/oauth-server/oauth-server.service';
export declare class AuthController {
    private readonly authService;
    private readonly oauthServerService;
    constructor(authService: AuthService, oauthServerService: OauthServerService);
    signup(body: CreateUserDto, req: Request, res: Response): Promise<void>;
    logout(res: Response): Promise<void>;
    validatorEmail(body: ValidatorEmailDto): Promise<void>;
    resetMail(user: UserEntity): Promise<void>;
    resetPassword(user: UserEntity, data: ResetPasswordDto): Promise<void>;
    newPassword(user: UserEntity, data: NewPasswordDto): Promise<void>;
}
