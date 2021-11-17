/// <reference types="../typings/index" />
import { GraphQLResolveInfo } from 'graphql';
import { UserEntity } from '../user/user.entity';
import { PicturesType } from '../../../enum/picture';
import DataLoader from 'dataloader';
import { BlurhashService } from '../../shared/blurhash/blurhash.service';
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
    private readonly blurhashService;
    constructor(collectionService: CollectionService, commentService: CommentService, pictureService: PictureService, badgeService: BadgeService, blurhashService: BlurhashService);
    searchPictures(user: Maybe<UserEntity>, query: GetPictureListDto, words: string, info: GraphQLResolveInfo): Promise<import("../../common/utils/request").IListRequest<PictureEntity[]>>;
    pictures(user: Maybe<UserEntity>, query: GetPictureListDto, info: GraphQLResolveInfo, type?: PicturesType): Promise<import("../../common/utils/request").IListRequest<Record<string, any>>>;
    newPictures(user: Maybe<UserEntity>, query: GetNewPictureListDto, info: GraphQLResolveInfo): Promise<import("../../common/utils/request").IListRequest<PictureEntity[]>>;
    userPictures(user: Maybe<UserEntity>, id: string, username: string, query: GetUserPictureListDto, info: GraphQLResolveInfo): Promise<import("../../common/utils/request").IListRequest<Record<string, any>>>;
    picture(user: Maybe<UserEntity>, info: GraphQLResolveInfo, id: number): Promise<Record<string, any>>;
    pictureRelatedCollection(id: number): Promise<{
        data: Record<string, any>;
        count: number;
    }>;
    pictureRelatedPictures(user: Maybe<UserEntity>, id: number, limit: number | undefined, info: GraphQLResolveInfo): Promise<PictureEntity[]>;
    likePicture(user: UserEntity, id: number): Promise<PictureEntity>;
    unlikePicture(user: UserEntity, id: number): Promise<PictureEntity>;
    updatePicture(user: UserEntity, id: number, data: UpdatePictureDot): Promise<PictureEntity>;
    deletePicture(user: UserEntity, id: number): Promise<{
        done: boolean;
    }>;
    commentCount(parent: PictureEntity, loader: DataLoader<number, number>): Promise<number>;
    currentCollections(parent: PictureEntity, user?: UserEntity): Promise<Record<string, any>>;
    badge(parent: PictureEntity, badgeLoader: DataLoader<BadgeEntity['id'], BadgeEntity>): Promise<BadgeEntity>;
    blurhashSrc(parent: PictureEntity): Promise<string | undefined>;
}
