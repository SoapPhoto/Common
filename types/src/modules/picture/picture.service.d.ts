/// <reference types="../typings/index" />
import { Repository, SelectQueryBuilder } from 'typeorm';
import { RedisService } from 'nestjs-redis';
import { GetTagPictureListDto } from '@server/modules/tag/dto/tag.dto';
import { TagService } from '@server/modules/tag/tag.service';
import { UserEntity } from '@server/modules/user/user.entity';
import { UserService } from '@server/modules/user/user.service';
import { LoggingService } from '@server/shared/logging/logging.service';
import { PicturesType } from '@common/enum/picture';
import { GraphQLResolveInfo } from 'graphql';
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
    private readonly redisService;
    constructor(logger: LoggingService, activityService: PictureUserActivityService, tagService: TagService, userService: UserService, collectionService: CollectionService, commentService: CommentService, badgeService: BadgeService, followService: FollowService, pictureRepository: Repository<PictureEntity>, redisService: RedisService);
    create(data: Partial<PictureEntity>): Promise<PictureEntity>;
    update(id: number, { tags, ...data }: UpdatePictureDot, user: UserEntity): Promise<Object>;
    search: (words: string, query: GetPictureListDto, user: UserEntity, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getNewList: (user: UserEntity, query: GetNewPictureListDto, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: PictureEntity[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 增加阅读数量
     *
     * @param {number} id
     * @returns
     * @memberof PictureService
     */
    addViewCount(id: number): Promise<import("typeorm").UpdateResult>;
    /**
     * 获取单个图片信息
     *
     * @param {number} id
     * @param {Maybe<UserEntity>} user
     * @param {boolean} toPlain
     * @param {GraphQLResolveInfo} [select]
     * @returns {Promise<Record<string, any>>}
     * @memberof PictureService
     */
    findOne(id: number, user: Maybe<UserEntity>, select?: GraphQLResolveInfo): Promise<PictureEntity>;
    /**
     * 获取单个图片信息
     *
     * @param {number} id
     * @param {Maybe<UserEntity>} user
     * @param {boolean} toPlain
     * @param {GraphQLResolveInfo} [select]
     * @returns {Promise<Record<string, any>>}
     * @memberof PictureService
     */
    findOne(id: number, user: Maybe<UserEntity>, toPlain: boolean, info?: GraphQLResolveInfo): Promise<Record<string, any>>;
    find(user: Maybe<UserEntity>, type: PicturesType, query: GetNewPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: any[];
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 喜欢图片
     *
     * @memberof PictureService
     */
    likePicture: (id: number, user: UserEntity, data: boolean) => Promise<{
        isLike: boolean;
        count: number;
    }>;
    /**
     * 获取某个用户的图片列表
     *
     * @memberof PictureService
     */
    getUserPicture: (idOrName: string, query: GetPictureListDto, user: UserEntity, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 获取用户订阅的图片列表（
     *
     * @param {UserEntity} user
     * @param {GetPictureListDto} query
     * @memberof PictureService
     */
    getFeedPictures(user: UserEntity, query: GetPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 某个用户喜欢的图片列表
     *
     * @memberof PictureService
     */
    getUserLikePicture: (idOrName: string, query: GetPictureListDto, user: UserEntity, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 某个用户喜精选的图片列表
     *
     * @memberof PictureService
     */
    getUserChoicePicture: (idOrName: string, query: GetPictureListDto, user: UserEntity, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 获取某个标签的图片列表
     *
     * @memberof PictureService
     */
    getTagPictureList: (name: string, user: UserEntity, query: GetTagPictureListDto, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 删除图片
     *
     * @memberof PictureService
     */
    delete: (id: number, user: UserEntity) => Promise<{
        done: boolean;
    }>;
    /**
     * 获取用户的预览图片
     *
     * @param {string} username
     * @param {number} limit
     * @returns
     * @memberof PictureService
     */
    getUserPreviewPictures(username: string, limit: number): Promise<PictureEntity[]>;
    /**
     * 获取用户对某个图片收藏的收藏夹
     *
     * @param {number} id
     * @param {UserEntity} user
     * @returns
     * @memberof PictureService
     */
    getCurrentCollections(id: number, user: UserEntity): Promise<Object>;
    getPictureHotInfoList: (user: UserEntity, query: GetPictureListDto, info: GraphQLResolveInfo) => Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getCollectionPictureListQuery: (id: number, user: UserEntity, info: GraphQLResolveInfo) => SelectQueryBuilder<PictureEntity>;
    /**
     * 计算热门图片
     *
     * @returns
     * @memberof PictureService
     */
    calculateHotPictures(): Promise<any[]>;
    /**
     * 图片的初始查询条件
     *
     * @memberof PictureService
     */
    select: (user: UserEntity, options?: ISelectOptions) => SelectQueryBuilder<PictureEntity>;
    /**
     * 图片列表的初始查询条件
     *
     * @memberof PictureService
     */
    selectList: (user: UserEntity, query: GetPictureListDto, options?: ISelectOptions) => SelectQueryBuilder<PictureEntity>;
    /**
     * 获取图片的一些基础信息的查询，如：`likedCount`,`isLike`
     *
     * @memberof PictureService
     */
    selectInfo: <T>(q: SelectQueryBuilder<T>, user: UserEntity, options?: ISelectOptions) => void;
    getAllPicture: () => Promise<PictureEntity[]>;
    getRawList: () => Promise<PictureEntity[]>;
    updateRaw: (picture: PictureEntity, updateData: Partial<PictureEntity>) => Promise<PictureEntity>;
    getPictureLikes: (id: number) => Promise<number>;
    getUserIsLike: (id: number, user: UserEntity) => Promise<boolean>;
    userLikesCount: (id: number) => Promise<number>;
    getPictureLikedCount: (id: number) => Promise<number>;
    getUserLikedCount: (id: number) => Promise<number>;
}
