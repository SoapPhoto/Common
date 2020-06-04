import { SignupType } from '../../../enum/signupType';
import { Status } from '../../../enum/userStatus';
import { BaseEntity } from '../../common/base.entity';
import { PictureEntity } from '../picture/picture.entity';
import { CollectionEntity } from '../collection/collection.entity';
import { CommentEntity } from '../comment/comment.entity';
import { PictureUserActivityEntity } from '../picture/user-activity/user-activity.entity';
import { Role } from './enum/role.enum';
import { CredentialsEntity } from '../credentials/credentials.entity';
import { BadgeEntity } from '../badge/badge.entity';

export declare class UserEntity extends BaseEntity {
  readonly id: number;

  /** 用户名 */
  readonly username: string;

  /** 用户类型 */
  role: Role;

  /** 显示的名称 */
  name: string;

  /** 识别码:一般是邮箱 */
  identifier: string;

  /** 邮箱验证的随机验证码 */
  verificationToken: string;

  status: Status;

  /** 注册的类型 */
  signupType: SignupType;

  /** 邮箱 */
  readonly email: string;

  /** 密码验证 */
  hash: string;

  /** 密码盐 */
  readonly salt: string;

  /** 用户头像 */
  avatar: string;

  /** 个人介绍 */
  bio: string;

  /** 个人网站 */
  website: string;

  /** 用户的picture */
  readonly pictures: PictureEntity[];

  /** 用户的评论 */
  readonly comments: CommentEntity[];

  /** 用户的收藏夹 */
  readonly collections: CollectionEntity[];

  /** 用户的绑定用户  */
  readonly credentials: CredentialsEntity[];

  /** 用户的picture操作 */
  readonly pictureActivities: PictureUserActivityEntity[];

  badge: BadgeEntity[];

  isEmailVerified: boolean;

  /** 是否关注0:未关注1:已关注2:互相关注 */
  isFollowing: number;

  /** 喜欢的picture数量 */
  likedCount: number;

  /** 用户被喜欢的数量 */
  likesCount: number;

  /** 用户的picture数量 */
  pictureCount: number;

  /** 粉丝数量 */
  followerCount: number;

  /** 关注数量 */
  followedCount: number;

  isVerified(): boolean;

  isActive(): boolean;

  get fullName(): string;

  get isPassword(): boolean;
}
