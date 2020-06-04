import { PaginationDto } from '@server/common/dto/pagination.dto';
import { CommentEntity } from '../comment.entity';
export declare class CreatePictureCommentDot implements Partial<CommentEntity> {
    /**
     * picture标题
     *
     * @type {string}
     * @memberof CreateUserDto
     */
    readonly content: string;
}
export declare class GetPictureCommentListDto extends PaginationDto {
}
