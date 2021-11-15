import { PaginationDto } from '../../../common/dto/pagination.dto';
import { CommentEntity } from '../comment.entity';
export declare class CreatePictureCommentDot implements Partial<CommentEntity> {
    readonly content: string;
}
export declare class GetPictureCommentListDto extends PaginationDto {
}
