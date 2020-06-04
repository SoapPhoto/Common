/// <reference types="../typings/index" />
import { UserEntity } from '@server/modules/user/user.entity';
import { CollectionService } from './collection.service';
import { CreateCollectionDot, GetCollectionPictureListDto, UpdateCollectionDot } from './dto/collection.dto';
export declare class CollectionController {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    createCollection(body: CreateCollectionDot, user: UserEntity): Promise<Object>;
    deleteCollection(collectionId: number, user: UserEntity): Promise<void>;
    updateCollection(body: UpdateCollectionDot, collectionId: number, user: UserEntity): Promise<import("typeorm").UpdateResult>;
    addPictureCollection(pictureId: number, collectionId: number, user: UserEntity): Promise<Object>;
    removePictureCollection(pictureId: number, collectionId: number, user: UserEntity): Promise<void>;
    collectionDetail(collectionId: number, query: GetCollectionPictureListDto, user: Maybe<UserEntity>): Promise<Object>;
    collectionPictureList(collectionId: number, query: GetCollectionPictureListDto, user: Maybe<UserEntity>): Promise<void>;
}
