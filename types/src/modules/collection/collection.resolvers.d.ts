/// <reference types="../typings/index" />
import { GraphQLResolveInfo } from 'graphql';
import { CollectionService } from './collection.service';
import { UserEntity } from '../user/user.entity';
import { GetCollectionPictureListDto } from './dto/collection.dto';
export declare class CollectionResolver {
    private readonly collectionService;
    constructor(collectionService: CollectionService);
    collection(user: Maybe<UserEntity>, id: number): Promise<Object>;
    collectionPictures(user: Maybe<UserEntity>, query: GetCollectionPictureListDto, id: number, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    addPictureCollection(user: UserEntity, id: number, pictureId: number): Promise<Object>;
    removePictureCollection(user: UserEntity, id: number, pictureId: number): Promise<{
        done: boolean;
    }>;
    deleteCollection(user: UserEntity, id: number): Promise<{
        done: boolean;
    }>;
}
