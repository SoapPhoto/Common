import { PaginationDto } from '../../../common/dto/pagination.dto';
import { LocationEntity } from '../../location/location.entity';
import { PictureEntity } from '../picture.entity';
export declare class GetPictureListDto extends PaginationDto {
}
export declare class GetNewPictureListDto extends PaginationDto {
    readonly lastTimestamp?: number;
    get lastTime(): string | undefined;
}
export declare class GetUserPictureListDto extends GetPictureListDto {
}
export declare class CreatePictureAddDot implements Partial<PictureEntity> {
    readonly key: string;
    readonly info: any;
    readonly title: string;
    readonly bio: string;
    readonly tags: any;
    readonly isPrivate: boolean;
    readonly location?: LocationEntity;
}
export declare class UpdatePictureDot implements Partial<PictureEntity> {
    readonly title: string;
    readonly bio: string;
    readonly isPrivate: boolean;
    locationUid: string;
    readonly tags: any;
}
