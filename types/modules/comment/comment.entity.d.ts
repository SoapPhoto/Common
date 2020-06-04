import { BaseEntity } from '../../common/base.entity';
import { PictureEntity } from '../picture/picture.entity';
import { UserEntity } from '../user/user.entity';

export declare class CommentEntity extends BaseEntity {
  readonly id: number;

  content: string;

  ip: string;

  ip_location: Record<string, string>;

  userAgent: string;

  readonly user: UserEntity;

  readonly picture: PictureEntity;

  readonly parentComment: CommentEntity;

  readonly replyComment: CommentEntity;

  readonly replyUser: UserEntity;

  subCount: number;

  childComments: CommentEntity[];
}
