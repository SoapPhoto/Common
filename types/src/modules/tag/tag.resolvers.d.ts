/// <reference types="../typings/index" />
import { UserEntity } from '@server/modules/user/user.entity';
import { GraphQLResolveInfo } from 'graphql';
import { GetTagPictureListDto } from './dto/tag.dto';
import { TagService } from './tag.service';
import { PictureService } from '../picture/picture.service';
export declare class TagResolver {
    private readonly tagService;
    private readonly pictureService;
    constructor(tagService: TagService, pictureService: PictureService);
    tag(user: Maybe<UserEntity>, name: string): Promise<import("./tag.entity").TagEntity>;
    tagPictures(user: Maybe<UserEntity>, name: string, query: GetTagPictureListDto, info: GraphQLResolveInfo): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
}
