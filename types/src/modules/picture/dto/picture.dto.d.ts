import { PaginationDto } from '@server/common/dto/pagination.dto';
import { PictureEntity } from '../picture.entity';
import { PictureLocation } from '../interface/location.interface';
export declare class GetPictureListDto extends PaginationDto {
}
export declare class GetNewPictureListDto extends PaginationDto {
    readonly lastTimestamp?: number;
    get lastTime(): string;
}
export declare class GetUserPictureListDto extends GetPictureListDto {
}
export declare class CreatePictureAddDot implements Partial<PictureEntity> {
    readonly key: string;
    /**
     * 图片信息
     *
     * @type {string}
     * @memberof CreateUserDto
     */
    readonly info: any;
    /**
     * picture标题
     *
     * @type {string}
     * @memberof CreateUserDto
     */
    readonly title: string;
    /**
     * picture简介
     *
     * @type {string}
     * @memberof CreatePictureAddDot
     */
    readonly bio: string;
    readonly tags: any;
    readonly isPrivate: boolean;
    readonly location?: PictureLocation;
}
export declare class UpdatePictureDot implements Partial<PictureEntity> {
    readonly title: string;
    readonly bio: string;
    readonly isPrivate: boolean;
    readonly tags: any;
}
