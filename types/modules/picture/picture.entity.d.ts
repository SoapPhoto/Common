/// <reference types="../typings/index" />
import { CommentEntity } from '../comment/comment.entity';
import { BaseEntity } from '../../common/base.entity';
import { TagEntity } from '../tag/tag.entity';
import { UserEntity } from '../user/user.entity';
import { CollectionPictureEntity } from '../collection/picture/collection-picture.entity';
import { BaiduClassify } from '../../shared/baidu/interface/baidu.interface';
import { PictureUserActivityEntity } from './user-activity/user-activity.entity';
import { CollectionEntity } from '../collection/collection.entity';
import { BadgeEntity } from '../badge/badge.entity';
import { PictureLocation } from './interface/location.interface';
export interface IRelatedCollections {
    count: number;
    data: CollectionEntity[];
}
export declare class PictureEntity extends BaseEntity {
    readonly id: number;
    readonly key: string;
    readonly hash: string;
    readonly title: string;
    readonly bio: string;
    readonly isPrivate: boolean;
    views: number;
    readonly originalname: string;
    readonly mimetype: string;
    readonly size: number;
    isLike: boolean;
    likedCount: number;
    commentCount: number;
    readonly color: string;
    readonly isDark: boolean;
    readonly height: number;
    readonly width: number;
    readonly make?: string;
    readonly model?: string;
    readonly blurhash?: string;
    readonly exif?: IEXIF;
    readonly location?: PictureLocation;
    readonly classify?: BaiduClassify[];
    readonly user: UserEntity;
    readonly comments: CommentEntity[];
    readonly activities: PictureUserActivityEntity[];
    tags: TagEntity[];
    keywords: string;
    deleted: number;
    badge: BadgeEntity[];
    info: CollectionPictureEntity[];
    relatedCollections: IRelatedCollections;
    blurhashSrc?: string;
    get currentCollections(): CollectionEntity[];
}
