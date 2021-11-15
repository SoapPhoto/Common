import { PaginationDto } from '../../../common/dto/pagination.dto';
import { CollectionEntity } from '../collection.entity';
export declare class GetCollectionPictureListDto extends PaginationDto {
}
export declare class GetUserCollectionListDto extends PaginationDto {
}
export declare class CreateCollectionDot implements Partial<CollectionEntity> {
    name: string;
    bio: string;
    isPrivate: boolean;
}
export declare class UpdateCollectionDot extends CreateCollectionDot {
}
export declare class AddPictureCollectionDot {
    pictureId: string;
}
