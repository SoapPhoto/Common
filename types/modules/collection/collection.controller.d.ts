/// <reference types="../typings/index" />
import { UserEntity } from '../user/user.entity';
import { CollectionService } from './collection.service';
import { CreateCollectionDot, GetCollectionPictureListDto, UpdateCollectionDot } from './dto/collection.dto';
export declare class CollectionController {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    createCollection(body: CreateCollectionDot, user: UserEntity): Promise<Record<string, any>>;
    deleteCollection(collectionId: number, user: UserEntity): Promise<void>;
    updateCollection(body: UpdateCollectionDot, collectionId: number, user: UserEntity): Promise<Record<string, any>>;
    addPictureCollection(pictureId: number, collectionId: number, user: UserEntity): Promise<Record<string, any>>;
    removePictureCollection(pictureId: number, collectionId: number, user: UserEntity): Promise<void>;
    collectionDetail(collectionId: number, query: GetCollectionPictureListDto, user: Maybe<UserEntity>): Promise<Record<string, any>>;
    collectionPictureList(collectionId: number, query: GetCollectionPictureListDto, user: Maybe<UserEntity>): Promise<void>;
}
