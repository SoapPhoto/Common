/// <reference types="../typings/index" />
import { RedisService } from 'nestjs-redis';
import { CommentService } from '@server/modules/comment/comment.service';
import { GetPictureCommentListDto } from '@server/modules/comment/dto/comment.dto';
import { QiniuService } from '@server/shared/qiniu/qiniu.service';
import { UserEntity } from '@server/modules/user/user.entity';
import { BaiduService } from '@server/shared/baidu/baidu.service';
import { CreatePictureAddDot, GetPictureListDto, UpdatePictureDot } from './dto/picture.dto';
import { PictureService } from './picture.service';
import { FileService } from '../file/file.service';
export declare class PictureController {
    private readonly qiniuService;
    private readonly commentService;
    private readonly pictureService;
    private readonly fileService;
    private readonly redisService;
    private readonly baiduService;
    constructor(qiniuService: QiniuService, commentService: CommentService, pictureService: PictureService, fileService: FileService, redisService: RedisService, baiduService: BaiduService);
    upload(body: CreatePictureAddDot, user: UserEntity): Promise<void>;
    deletePicture(id: number, user: UserEntity): Promise<{
        done: boolean;
    }>;
    updatePicture(id: number, data: UpdatePictureDot, user: UserEntity): Promise<Object>;
    getList(user: Maybe<UserEntity>, query: GetPictureListDto): Promise<void>;
    getImageClassify({ image }: {
        image: string;
    }): Promise<import("../../shared/baidu/interface/baidu.interface").BaiduClassify[]>;
    getOne(id: string, user: UserEntity): Promise<Record<string, any>>;
    likePicture(id: string, user: UserEntity): Promise<{
        isLike: boolean;
        count: number;
    }>;
    unlikePicture(id: string, user: UserEntity): Promise<{
        isLike: boolean;
        count: number;
    }>;
    getPictureCommentList(id: string, user: Maybe<UserEntity>, query: GetPictureCommentListDto): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    createPictureComment(user: UserEntity): Promise<{
        message: string;
    }>;
    getPicture(user: UserEntity): Promise<import("./picture.entity").PictureEntity[]>;
    setKeywords(user: UserEntity): Promise<{
        message: string;
    }>;
}
