/// <reference types="../typings/index" />
import { GraphQLResolveInfo } from 'graphql';
import { UserEntity } from '@server/modules/user/user.entity';
import { PicturesType } from '@common/enum/picture';
import DataLoader from 'dataloader';
import { GetPictureListDto, GetUserPictureListDto, UpdatePictureDot, GetNewPictureListDto } from './dto/picture.dto';
import { PictureService } from './picture.service';
import { CollectionService } from '../collection/collection.service';
import { PictureEntity } from './picture.entity';
import { CommentService } from '../comment/comment.service';
import { BadgeService } from '../badge/badge.service';
import { BadgeEntity } from '../badge/badge.entity';
export declare class PictureResolver {
    private readonly collectionService;
    private readonly commentService;
    private readonly pictureService;
    private readonly badgeService;
    constructor(collectionService: CollectionService, commentService: CommentService, pictureService: PictureService, badgeService: BadgeService);
    searchPictures(user: Maybe<UserEntity>, query: GetPictureListDto, words: string, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    pictures(user: Maybe<UserEntity>, query: GetPictureListDto, info: GraphQLResolveInfo, type?: PicturesType): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    newPictures(user: Maybe<UserEntity>, query: GetNewPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    userPictures(user: Maybe<UserEntity>, id: string, username: string, query: GetUserPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    picture(user: Maybe<UserEntity>, info: GraphQLResolveInfo, id: number): Promise<Record<string, any>>;
    pictureRelatedCollection(id: number): Promise<{
        data: Object;
        count: number;
    }>;
    likePicture(user: UserEntity, id: number): Promise<{
        isLike: boolean;
        count: number;
    }>;
    unlikePicture(user: UserEntity, id: number): Promise<{
        isLike: boolean;
        count: number;
    }>;
    updatePicture(user: UserEntity, id: number, data: UpdatePictureDot): Promise<Object>;
    deletePicture(user: UserEntity, id: number): Promise<{
        done: boolean;
    }>;
    commentCount(parent: PictureEntity): Promise<number>;
    currentCollections(parent: PictureEntity, user?: UserEntity): Promise<Object>;
    badge(parent: PictureEntity, badgeLoader: DataLoader<BadgeEntity['id'], BadgeEntity>): Promise<BadgeEntity>;
    blurhashSrc(parent: PictureEntity): Promise<string>;
}
