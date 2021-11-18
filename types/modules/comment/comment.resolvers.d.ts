/// <reference types="../typings/index" />
import { UserEntity } from '../user/user.entity';
import { IClientInfo } from '../../common/decorator/client_info.decorator';
import DataLoader from 'dataloader';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CreatePictureCommentDot, GetPictureCommentListDto } from './dto/comment.dto';
import { IChildCommentLoaderArgs } from './comment.loader';
export declare class CommentResolver {
    private readonly commentService;
    constructor(commentService: CommentService);
    comments(user: Maybe<UserEntity>, id: string, query: GetPictureCommentListDto): Promise<import("../../common/utils/request").IListRequest<Record<string, any>>>;
    childCommentList(user: Maybe<UserEntity>, id: number, query: GetPictureCommentListDto): Promise<import("../../common/utils/request").IListRequest<CommentEntity[]>>;
    addComment(clientInfo: IClientInfo, user: UserEntity, id: number, commentId: number, data: CreatePictureCommentDot): Promise<Record<string, any>>;
    childComments(parent: CommentEntity, limit: number, loader: DataLoader<IChildCommentLoaderArgs, CommentEntity>): Promise<CommentEntity | never[]>;
    subCount(parent: CommentEntity, loader: DataLoader<number, number>): Promise<number>;
}
