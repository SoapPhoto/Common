import { UserService } from '../user/user.service';
import { MailerService } from '@nestjs-modules/mailer';
import { ValidatorEmailDto, ResetPasswordDto, NewPasswordDto } from './dto/auth.dto';
import { CreateUserDto } from '../user/dto/user.dto';
import { UserEntity } from '../user/user.entity';
import { AccessTokenService } from '../oauth/access-token/access-token.service';
export declare class AuthService {
    private readonly userService;
    private readonly mailerService;
    private readonly accessTokenService;
    constructor(userService: UserService, mailerService: MailerService, accessTokenService: AccessTokenService);
    validatorEmail(query: ValidatorEmailDto): Promise<void>;
    emailSignup(data: CreateUserDto): Promise<void>;
    resetMail(user: UserEntity): Promise<void>;
    resetPassword(user: UserEntity, { password, newPassword }: ResetPasswordDto): Promise<void>;
    newPassword(user: UserEntity, { newPassword }: NewPasswordDto): Promise<void>;
    private sendValidator;
}
