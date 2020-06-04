import { BaseEntity } from '../../../common/base.entity';
import { PictureEntity } from '../../picture/picture.entity';
import { UserEntity } from '../../user/user.entity';
import { CollectionEntity } from '../collection.entity';

export declare class CollectionPictureEntity extends BaseEntity {
  readonly id: number;

  collection: CollectionEntity;

  picture: PictureEntity;

  user: UserEntity;
}
