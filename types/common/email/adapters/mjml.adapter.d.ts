import { TemplateAdapter, MailerOptions } from '@nestjs-modules/mailer';
export declare class MjmlAdapter implements TemplateAdapter {
    compile(mail: any, callback: any, mailerOptions: MailerOptions): void;
}
