/// <reference types="../typings/index" />
import { Repository, SelectQueryBuilder } from 'typeorm';
import { GraphQLResolveInfo } from 'graphql';
import { PictureService } from '../picture/picture.service';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
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
    create(body: CreateCollectionDot, user: UserEntity): Promise<Record<string, any>>;
    updateCollection(body: UpdateCollectionDot, id: number, user: UserEntity): Promise<Record<string, any>>;
    addPicture(id: number, pictureId: number, user: UserEntity): Promise<Record<string, any>>;
    removePicture(id: number, pictureId: number, _user: UserEntity): Promise<void>;
    selectInfo<E = CollectionEntity>(q: SelectQueryBuilder<E>, user: Maybe<UserEntity>): void;
    getCollectionDetail(id: number, user: Maybe<UserEntity>): Promise<Record<string, any>>;
    getCollectionPictureList(id: number, query: GetCollectionPictureListDto, user: Maybe<UserEntity>, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getUserCollectionList(idOrName: string, query: GetUserCollectionListDto, user: Maybe<UserEntity>): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    deleteCollection(id: number, user: UserEntity): Promise<void>;
    pictureRelatedCollection(pictureId: number, limit?: number): Promise<{
        data: Record<string, any>;
        count: number;
    }>;
    getCurrentCollections(pictureId: number, user: UserEntity): Promise<CollectionEntity[]>;
    isCollected(id: number, pictureId: number): Promise<boolean>;
}
