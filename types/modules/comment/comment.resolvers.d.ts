/// <reference types="../typings/index" />
import { UserEntity } from '../user/user.entity';
import { IClientInfo } from '../../common/decorator/client_info.decorator';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CreatePictureCommentDot, GetPictureCommentListDto } from './dto/comment.dto';
export declare class CommentResolver {
    private readonly commentService;
    constructor(commentService: CommentService);
    comments(user: Maybe<UserEntity>, id: string, query: GetPictureCommentListDto): Promise<{
        count: number;
        data: Record<string, any>;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    childCommentList(user: Maybe<UserEntity>, id: number, query: GetPictureCommentListDto): Promise<Record<string, any>>;
    addComment(clientInfo: IClientInfo, user: UserEntity, id: number, commentId: number, data: CreatePictureCommentDot): Promise<Record<string, any>>;
    childComments(parent: CommentEntity, user: Maybe<UserEntity>, limit?: number): Promise<Record<string, any>>;
    subCount(parent: CommentEntity): Promise<number>;
}
