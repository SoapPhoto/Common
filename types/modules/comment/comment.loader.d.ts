import DataLoader from 'dataloader';
import { NestDataLoader } from '../../shared/graphql/loader/loader.interceptor';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
export interface IChildCommentLoaderArgs {
    id: number;
    limit: number;
}
export declare class ChildCommentLoader implements NestDataLoader<IChildCommentLoaderArgs, CommentEntity[]> {
    private readonly commentService;
    constructor(commentService: CommentService);
    generateDataLoader(): DataLoader<IChildCommentLoaderArgs, CommentEntity[], IChildCommentLoaderArgs>;
}
export declare class CommentSubCountLoader implements NestDataLoader<number, number> {
    private readonly commentService;
    constructor(commentService: CommentService);
    generateDataLoader(): DataLoader<number, number, number>;
}
