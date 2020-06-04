/// <reference types="../typings/index" />
import { Repository, SelectQueryBuilder } from 'typeorm';
import { GraphQLResolveInfo } from 'graphql';
import { PictureService } from '@server/modules/picture/picture.service';
import { UserEntity } from '@server/modules/user/user.entity';
import { UserService } from '@server/modules/user/user.service';
import { CollectionEntity } from './collection.entity';
import { CreateCollectionDot, GetCollectionPictureListDto, GetUserCollectionListDto, UpdateCollectionDot } from './dto/collection.dto';
import { CollectionPictureEntity } from './picture/collection-picture.entity';
export declare class CollectionService {
    private collectionEntity;
    private collectionPictureEntity;
    private pictureService;
    private userService;
    constructor(collectionEntity: Repository<CollectionEntity>, collectionPictureEntity: Repository<CollectionPictureEntity>, pictureService: PictureService, userService: UserService);
    get metadata(): import("typeorm").EntityMetadata;
    get activityMetadata(): import("typeorm").EntityMetadata;
    /**
     * 创建收藏夹
     *
     * @param {CreateCollectionDot} body
     * @param {UserEntity} user
     * @returns
     * @memberof CollectionService
     */
    create(body: CreateCollectionDot, user: UserEntity): Promise<Object>;
    updateCollection(body: UpdateCollectionDot, id: number, user: UserEntity): Promise<import("typeorm").UpdateResult>;
    /**
     * 添加图片到收藏夹
     *
     * @param {string} id
     * @param {AddPictureCollectionDot} { pictureId }
     * @param {UserEntity} user
     * @memberof CollectionService
     */
    addPicture(id: number, pictureId: number, user: UserEntity): Promise<Object>;
    removePicture(id: number, pictureId: number, _user: UserEntity): Promise<void>;
    /**
     * select `pictureCount`
     *
     * @template E
     * @param {SelectQueryBuilder<E>} q
     * @param {Maybe<UserEntity>} user
     * @memberof CollectionService
     */
    selectInfo<E = CollectionEntity>(q: SelectQueryBuilder<E>, user: Maybe<UserEntity>): void;
    /**
     * 获取收藏夹详情
     *
     * @param {number} id
     * @param {Maybe<UserEntity>} user
     * @returns
     * @memberof CollectionService
     */
    getCollectionDetail(id: number, user: Maybe<UserEntity>): Promise<Object>;
    /**
     * 获取收藏夹图片列表
     *
     * @param {number} id
     * @param {GetCollectionPictureListDto} query
     * @param {Maybe<UserEntity>} user
     * @returns
     * @memberof CollectionService
     */
    getCollectionPictureList(id: number, query: GetCollectionPictureListDto, user: Maybe<UserEntity>, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getUserCollectionList(idOrName: string, query: GetUserCollectionListDto, user: Maybe<UserEntity>): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    deleteCollection(id: number, user: UserEntity): Promise<void>;
    pictureRelatedCollection(pictureId: number, limit?: number): Promise<{
        data: Object;
        count: number;
    }>;
    getCurrentCollections(pictureId: number, user: UserEntity): Promise<CollectionEntity[]>;
    /**
     * 是否已收藏
     *
     * @memberof CollectionService
     */
    isCollected(id: number, pictureId: number): Promise<boolean>;
}
