/// <reference types="../typings/index" />
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PictureService } from '@server/modules/picture/picture.service';
import { EmailService } from '@server/shared/email/email.service';
import { LoggingService } from '@server/shared/logging/logging.service';
import { GraphQLResolveInfo } from 'graphql';
import { CreateUserDto, UpdateProfileSettingDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { FileService } from '../file/file.service';
import { BadgeService } from '../badge/badge.service';
export declare class UserService {
    private readonly logger;
    private readonly pictureService;
    private readonly emailService;
    private readonly userEntity;
    private readonly fileService;
    private readonly badgeService;
    constructor(logger: LoggingService, pictureService: PictureService, emailService: EmailService, userEntity: Repository<UserEntity>, fileService: FileService, badgeService: BadgeService);
    createUser(data: CreateUserDto & Partial<UserEntity>): Promise<UserEntity>;
    createOauthUser(data: Partial<UserEntity>): Promise<UserEntity>;
    getPassword(password: string): Promise<{
        salt: string;
        hash: string;
    }>;
    isSignup(username: string, email: string, err?: boolean): Promise<false | "username" | "email">;
    signup(data: CreateUserDto, isEmail?: boolean): Promise<{
        message: string;
    }>;
    verifyUser(username: string, password: string): Promise<UserEntity | undefined>;
    findOne(query: ID, _user: Maybe<UserEntity>, info?: GraphQLResolveInfo | string[]): Promise<UserEntity>;
    selectInfo<E>(q: SelectQueryBuilder<E>, options?: ISelectOptions): SelectQueryBuilder<E>;
    /**
     * 查询用户徽章
     *
     * @template E
     * @param {SelectQueryBuilder<E>} q
     * @param {string} [value='user']
     * @returns
     * @memberof UserService
     */
    selectBadge<E>(q: SelectQueryBuilder<E>, value?: string): SelectQueryBuilder<E>;
    getRawIdsList(ids: string[], _user: Maybe<UserEntity>): Promise<UserEntity[]>;
    updateUser(user: UserEntity, body: Partial<UserEntity>, groups?: string[]): Promise<UserEntity>;
    findAllUsers(): Promise<UserEntity[]>;
    updateUserProfile(user: UserEntity, body: UpdateProfileSettingDto): Promise<Object>;
    isId(id: string | number): boolean;
}
