/// <reference types="../typings/index" />
import { CommentEntity } from '@server/modules/comment/comment.entity';
import { BaseEntity } from '@server/common/base.entity';
import { TagEntity } from '@server/modules/tag/tag.entity';
import { UserEntity } from '@server/modules/user/user.entity';
import { CollectionPictureEntity } from '@server/modules/collection/picture/collection-picture.entity';
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
    /** 七牛的key */
    readonly key: string;
    /** 七牛的hash */
    readonly hash: string;
    /** 图片标题 */
    readonly title: string;
    /** 图片介绍 */
    readonly bio: string;
    readonly isPrivate: boolean;
    /** 浏览次数 */
    views: number;
    /** 图片原始文件名 */
    readonly originalname: string;
    /** 图片类型 */
    readonly mimetype: string;
    /** 图片大小 */
    readonly size: number;
    /** 当前登录用户是否喜欢 */
    isLike: boolean;
    /** picture喜欢的数量 */
    likedCount: number;
    /** 图片评论数量 */
    commentCount: number;
    /** 图片的主色调 */
    readonly color: string;
    /** 图片的颜色是明还是暗 */
    readonly isDark: boolean;
    /** 图片长度 */
    readonly height: number;
    /** 图片宽度 */
    readonly width: number;
    /** 设备品牌 */
    readonly make?: string;
    /** 设备型号 */
    readonly model?: string;
    /** blurhash */
    readonly blurhash?: string;
    /** EXIF信息 */
    readonly exif?: IEXIF;
    /** EXIF信息 */
    readonly location?: PictureLocation;
    /** 图片作者 */
    readonly user: UserEntity;
    /** 图片的评论 */
    readonly comments: CommentEntity[];
    readonly activities: PictureUserActivityEntity[];
    tags: TagEntity[];
    keywords: string;
    badge: BadgeEntity[];
    info: CollectionPictureEntity[];
    relatedCollections: IRelatedCollections;
    blurhashSrc?: string;
    get currentCollections(): CollectionEntity[];
}
