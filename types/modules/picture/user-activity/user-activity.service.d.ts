/// <reference types="../typings/index" />
import { EntityManager, Repository } from 'typeorm';
import { NotificationService } from '../../notification/notification.service';
import { UserEntity } from '../../user/user.entity';
import { GetPictureListDto } from '../dto/picture.dto';
import { PictureEntity } from '../picture.entity';
import { PictureUserActivityEntity } from './user-activity.entity';
export declare class PictureUserActivityService {
    private readonly notificationService;
    private activityRepository;
    constructor(notificationService: NotificationService, activityRepository: Repository<PictureUserActivityEntity>);
    get metadata(): import("typeorm").EntityMetadata;
    getOne: (pictureId: number, userId: number) => Promise<PictureUserActivityEntity | undefined>;
    like: (picture: PictureEntity, user: UserEntity, data: boolean) => Promise<{
        isLike: boolean;
        count: number;
    }>;
    setInfo: (data: Partial<PictureUserActivityEntity>, picture: PictureEntity, user: UserEntity) => Promise<PictureUserActivityEntity>;
    getPicturesLikeCount: (ids: number[]) => Promise<any[]>;
    getLikes: (id: number) => Promise<number>;
    isLike: (id: number, user: UserEntity) => Promise<boolean>;
    userLikesCount: (userId: number) => Promise<number>;
    deleteByPicture: (picture: PictureEntity, entityManager: EntityManager) => Promise<import("typeorm").DeleteResult>;
    getLikeList: (userIdOrName: string, query: GetPictureListDto, user: Maybe<UserEntity>) => Promise<[number, string[]]>;
    getPictureLikedCount: (pictureId: number) => Promise<number>;
    getUserLikedCount: (userId: number) => Promise<number>;
}
