/// <reference types="../typings/index" />
import { Repository, SelectQueryBuilder } from 'typeorm';
import { RedisManager } from '@liaoliaots/nestjs-redis';
import { GetTagPictureListDto } from '../tag/dto/tag.dto';
import { TagService } from '../tag/tag.service';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { LoggingService } from '../../shared/logging/logging.service';
import { PicturesType } from '../../../enum/picture';
import { GraphQLResolveInfo } from 'graphql';
import { BaiduClassify } from '../../shared/baidu/interface/baidu.interface';
import { GetPictureListDto, UpdatePictureDot, GetNewPictureListDto } from './dto/picture.dto';
import { PictureEntity } from './picture.entity';
import { PictureUserActivityService } from './user-activity/user-activity.service';
import { CollectionService } from '../collection/collection.service';
import { CommentService } from '../comment/comment.service';
import { BadgeService } from '../badge/badge.service';
import { FollowService } from '../follow/follow.service';
export declare class PictureService {
    private readonly logger;
    private readonly activityService;
    private readonly tagService;
    private readonly userService;
    private readonly collectionService;
    private readonly commentService;
    private readonly badgeService;
    private readonly followService;
    private pictureRepository;
    private readonly redisManager;
    constructor(logger: LoggingService, activityService: PictureUserActivityService, tagService: TagService, userService: UserService, collectionService: CollectionService, commentService: CommentService, badgeService: BadgeService, followService: FollowService, pictureRepository: Repository<PictureEntity>, redisManager: RedisManager);
    getPictureKeyword(picture: PictureEntity): string;
    create(data: Partial<PictureEntity>): Promise<PictureEntity>;
    update(id: number, { tags, ...data }: UpdatePictureDot, user: UserEntity): Promise<Record<string, any>>;
    search: (words: string, query: GetPictureListDto, user: Maybe<UserEntity>, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getNewList: (user: Maybe<UserEntity>, query: GetNewPictureListDto, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    addViewCount(id: number): Promise<import("typeorm").UpdateResult>;
    findOne(id: number, user: Maybe<UserEntity>, select?: GraphQLResolveInfo): Promise<PictureEntity>;
    findOne(id: number, user: Maybe<UserEntity>, toPlain: boolean, info?: GraphQLResolveInfo): Promise<Record<string, any>>;
    find(user: Maybe<UserEntity>, type: PicturesType, query: GetNewPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    likePicture: (id: number, user: UserEntity, data: boolean) => Promise<PictureEntity>;
    getUserPicture: (idOrName: string, query: GetPictureListDto, user: Maybe<UserEntity>, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getFeedPictures(user: UserEntity, query: GetPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getUserLikePicture: (idOrName: string, query: GetPictureListDto, user: Maybe<UserEntity>, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getUserChoicePicture: (idOrName: string, query: GetPictureListDto, user: Maybe<UserEntity>, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getTagPictureList: (name: string, user: Maybe<UserEntity>, query: GetTagPictureListDto, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getPictureRelated: (id: number, limit: number, user: Maybe<UserEntity>, info: GraphQLResolveInfo) => Promise<PictureEntity[]>;
    delete: (id: number, user: UserEntity) => Promise<{
        done: boolean;
    }>;
    getUserPreviewPictures(username: string, limit: number): Promise<PictureEntity[]>;
    getCurrentCollections(id: number, user: UserEntity): Promise<Record<string, any>>;
    getPictureHotInfoList: (user: Maybe<UserEntity>, query: GetPictureListDto, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getCollectionPictureListQuery: (id: number, user: Maybe<UserEntity>, info: GraphQLResolveInfo) => SelectQueryBuilder<PictureEntity>;
    calculateHotPictures(): Promise<any[]>;
    select: (user: Maybe<UserEntity>, options?: ISelectOptions | undefined) => SelectQueryBuilder<PictureEntity>;
    selectList: (user: Maybe<UserEntity>, query: GetPictureListDto, options?: ISelectOptions | undefined) => SelectQueryBuilder<PictureEntity>;
    selectInfo: <T>(q: SelectQueryBuilder<T>, user: Maybe<UserEntity>, options?: ISelectOptions | undefined) => void;
    getAllPicture: () => Promise<PictureEntity[]>;
    getNotClassifyPicture: () => Promise<PictureEntity[]>;
    updateClassifyPicture: (id: number, classify: BaiduClassify[]) => Promise<import("typeorm").UpdateResult>;
    getRawList: () => Promise<PictureEntity[]>;
    updateRaw: (picture: PictureEntity, updateData: Partial<PictureEntity>) => Promise<PictureEntity>;
    getPictureLikes: (id: number) => Promise<number>;
    getUserIsLike: (id: number, user: UserEntity) => Promise<boolean>;
    userLikesCount: (id: number) => Promise<number>;
    getPictureLikedCount: (id: number) => Promise<number>;
    getUserLikedCount: (id: number) => Promise<number>;
}
