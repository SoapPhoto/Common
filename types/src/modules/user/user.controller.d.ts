/// <reference types="../typings/index" />
import { GetPictureListDto } from '@server/modules/picture/dto/picture.dto';
import { CollectionService } from '@server/modules/collection/collection.service';
import { GetUserCollectionListDto } from '@server/modules/collection/dto/collection.dto';
import { QiniuService } from '@server/shared/qiniu/qiniu.service';
import { UpdateProfileSettingDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { FileService } from '../file/file.service';
export declare class UserController {
    private readonly userService;
    private readonly collectionService;
    private readonly qiniuService;
    private readonly fileService;
    constructor(userService: UserService, collectionService: CollectionService, qiniuService: QiniuService, fileService: FileService);
    getMyInfo(user: UserEntity): Promise<UserEntity>;
    githubAvatar(): Promise<{
        status: string;
    }>;
    getUserPicture(idOrName: string, user: Maybe<UserEntity>, query: GetPictureListDto): Promise<void>;
    getUserLikePicture(idOrName: string, user: Maybe<UserEntity>, query: GetPictureListDto): Promise<void>;
    updateUserSetting(username: string, user: UserEntity, body: UpdateProfileSettingDto): Promise<Object>;
    getIdInfo(id: string, user: Maybe<UserEntity>): Promise<UserEntity>;
    getNameInfo(username: string, user: Maybe<UserEntity>): Promise<UserEntity>;
    getUserCollections(idOrName: string, user: Maybe<UserEntity>, query: GetUserCollectionListDto): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
}
