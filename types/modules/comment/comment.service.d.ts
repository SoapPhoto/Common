/// <reference types="../typings/index" />
import { Repository } from 'typeorm';
import { PictureService } from '../picture/picture.service';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { IClientInfo } from '../../common/decorator/client_info.decorator';
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
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    getRawOne(id: number): Promise<CommentEntity | undefined>;
    getOne(id: number): Promise<CommentEntity | undefined>;
    create(clientInfo: IClientInfo, user: UserEntity, data: CreatePictureCommentDot, id: number, commentId?: number): Promise<Record<string, any>>;
    childComments(id: number, user: Maybe<UserEntity>, limit?: number, query?: GetPictureCommentListDto): Promise<Record<string, any>>;
    getSubCount(id: number): Promise<number>;
    getPictureCommentCount(pictureId: number): Promise<number>;
    getPicturesCommentCount(ids: number[]): Promise<any[]>;
}
