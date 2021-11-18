/// <reference types="../typings/index" />
import { RedisManager } from '@liaoliaots/nestjs-redis';
import { CommentService } from '../comment/comment.service';
import { GetPictureCommentListDto } from '../comment/dto/comment.dto';
import { UserEntity } from '../user/user.entity';
import { BaiduService } from '../../shared/baidu/baidu.service';
import { BaiduClassify } from '../../shared/baidu/interface/baidu.interface';
import { CreatePictureAddDot, GetPictureListDto, UpdatePictureDot } from './dto/picture.dto';
import { PictureService } from './picture.service';
import { FileService } from '../file/file.service';
import { LocationService } from '../location/location.service';
export declare class PictureController {
    private readonly commentService;
    private readonly pictureService;
    private readonly fileService;
    private readonly redisManager;
    private readonly baiduService;
    private readonly locationService;
    constructor(commentService: CommentService, pictureService: PictureService, fileService: FileService, redisManager: RedisManager, baiduService: BaiduService, locationService: LocationService);
    upload(body: CreatePictureAddDot, user: UserEntity): Promise<import("./picture.entity").PictureEntity>;
    deletePicture(id: number, user: UserEntity): Promise<{
        done: boolean;
    }>;
    updatePicture(id: number, data: UpdatePictureDot, user: UserEntity): Promise<import("./picture.entity").PictureEntity>;
    getList(user: Maybe<UserEntity>, query: GetPictureListDto): Promise<void>;
    getImageClassify({ image }: {
        image: string;
    }): Promise<BaiduClassify[]>;
    getOne(id: string, user: UserEntity): Promise<Record<string, any>>;
    likePicture(id: string, user: UserEntity): Promise<import("./picture.entity").PictureEntity>;
    unlikePicture(id: string, user: UserEntity): Promise<import("./picture.entity").PictureEntity>;
    getPictureCommentList(id: string, user: Maybe<UserEntity>, query: GetPictureCommentListDto): Promise<import("../../common/utils/request").IListRequest<Record<string, any>>>;
    getBaiduToken(): Promise<import("../../shared/baidu/interface/baidu.interface").BaiduToken>;
    createPictureComment(user: UserEntity): Promise<{
        message: string;
    }>;
    getPicture(user: UserEntity): Promise<import("./picture.entity").PictureEntity[]>;
    setKeywords(user: UserEntity): Promise<{
        message: string;
    }>;
    allClassify(): Promise<(false | {
        url: string;
        id: number;
        classify: BaiduClassify[];
        message?: undefined;
    } | {
        id: number;
        url: string;
        message: unknown;
        classify?: undefined;
    })[]>;
    updateKeywords(): Promise<{
        message: string;
        total: number;
    }>;
}
