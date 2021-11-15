/// <reference types="../typings/index" />
import { GraphQLResolveInfo } from 'graphql';
import { CollectionService } from './collection.service';
import { UserEntity } from '../user/user.entity';
import { CreateCollectionDot, GetCollectionPictureListDto, UpdateCollectionDot } from './dto/collection.dto';
export declare class CollectionResolver {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    collection(user: Maybe<UserEntity>, id: number): Promise<Record<string, any>>;
    collectionPictures(user: Maybe<UserEntity>, query: GetCollectionPictureListDto, id: number, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    addPictureCollection(user: UserEntity, id: number, pictureId: number): Promise<Record<string, any>>;
    removePictureCollection(user: UserEntity, id: number, pictureId: number): Promise<{
        done: boolean;
    }>;
    deleteCollection(user: UserEntity, id: number): Promise<{
        done: boolean;
    }>;
    addCollection(user: UserEntity, data: CreateCollectionDot): Promise<Record<string, any>>;
    updateCollection(user: UserEntity, id: number, data: UpdateCollectionDot): Promise<Record<string, any>>;
}
