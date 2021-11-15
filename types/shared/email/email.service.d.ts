import { UserEntity } from '../../modules/user/user.entity';
export declare class EmailService {
    transporter: import('nodemailer/lib/mailer');
    constructor();
    init(): Promise<void>;
    setMailContent(type: string, options: Record<string, string>): string;
    sendSignupEmail(identifier: string, verificationToken: string, userInfo: UserEntity): Promise<any>;
}
