/// <reference types="../typings/index" />
import { UserEntity } from '@server/modules/user/user.entity';
import { IClientInfo } from '@server/common/decorator/client_info.decorator';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CreatePictureCommentDot, GetPictureCommentListDto } from './dto/comment.dto';
export declare class CommentResolver {
    private readonly commentService;
    constructor(commentService: CommentService);
    comments(user: Maybe<UserEntity>, id: string, query: GetPictureCommentListDto): Promise<{
        count: number;
        data: Object;
        page: number;
        pageSize: number;
        timestamp: number;
    }>;
    childCommentList(user: Maybe<UserEntity>, id: number, query: GetPictureCommentListDto): Promise<Object>;
    addComment(clientInfo: IClientInfo, user: UserEntity, id: number, commentId: number, data: CreatePictureCommentDot): Promise<Object>;
    childComments(parent: CommentEntity, user: Maybe<UserEntity>, limit?: number): Promise<Object>;
    subCount(parent: CommentEntity): Promise<number>;
}
