/// <reference types="../typings/index" />
import { Repository } from 'typeorm';
import { PictureService } from '@server/modules/picture/picture.service';
import { UserEntity } from '@server/modules/user/user.entity';
import { UserService } from '@server/modules/user/user.service';
import { IClientInfo } from '@server/common/decorator/client_info.decorator';
import { CommentEntity } from './comment.entity';
import { CreatePictureCommentDot, GetPictureCommentListDto } from './dto/comment.dto';
import { NotificationService } from '../notification/notification.service';
export declare class CommentService {
    private commentRepository;
    private readonly pictureService;
    private readonly userService;
    private readonly notificationService;
    constructor(commentRepository: Repository<CommentEntity>, pictureService: PictureService, userService: UserService, notificationService: NotificationService);
    getPictureList(id: string, query: GetPictureCommentListDto, _user: Maybe<UserEntity>): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    /**
     * 给通知是用的
     *
     * @param {number} id
     * @returns
     * @memberof CommentService
     */
    getRawOne(id: number): Promise<CommentEntity>;
    getOne(id: number): Promise<CommentEntity>;
    create(clientInfo: IClientInfo, user: UserEntity, data: CreatePictureCommentDot, id: number, commentId?: number): Promise<Object>;
    childComments(id: number, user: Maybe<UserEntity>, limit?: number, query?: GetPictureCommentListDto): Promise<Object>;
    getSubCount(id: number): Promise<number>;
    getPictureCommentCount(pictureId: number): Promise<number>;
    getPicturesCommentCount(ids: number[]): Promise<any[]>;
}
