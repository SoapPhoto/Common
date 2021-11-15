/// <reference types="../typings/index" />
import { GetPictureListDto } from '../picture/dto/picture.dto';
import { UserPictureType } from '../../../enum/picture';
import { GraphQLResolveInfo } from 'graphql';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { CollectionService } from '../collection/collection.service';
import { UpdateProfileSettingDto } from './dto/user.dto';
import { FollowService } from '../follow/follow.service';
import { PictureService } from '../picture/picture.service';
export declare class UserResolver {
    private readonly userService;
    private readonly collectionService;
    private readonly followService;
    private readonly pictureService;
    constructor(userService: UserService, collectionService: CollectionService, followService: FollowService, pictureService: PictureService);
    whoami(user: UserEntity, info: GraphQLResolveInfo): Promise<Record<string, any>>;
    user(user: Maybe<UserEntity>, info: GraphQLResolveInfo, id: string, username: string): Promise<UserEntity | undefined>;
    userCollectionsByName(user: Maybe<UserEntity>, username: string, query: GetPictureListDto): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    userCollectionsById(user: Maybe<UserEntity>, id: string, query: GetPictureListDto): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    userPicturesByName(user: Maybe<UserEntity>, username: string, type: UserPictureType, query: GetPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    userPicturesById(user: Maybe<UserEntity>, id: string, type: UserPictureType, query: GetPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    updateProfile(user: UserEntity, data: UpdateProfileSettingDto): Promise<Record<string, any>>;
    updateCover(user: UserEntity, cover: string): Promise<Record<string, any>>;
    likedCount(parent: UserEntity): Promise<number>;
    likesCount(parent: UserEntity): Promise<number>;
    isFollowing(user: Maybe<UserEntity>, parent: UserEntity): Promise<0 | 1 | 2>;
    followerCount(parent: UserEntity): Promise<number>;
    followedCount(parent: UserEntity): Promise<number>;
    getAvatarSize(parent: UserEntity, limit: number): Promise<import("../picture/picture.entity").PictureEntity[]>;
}
