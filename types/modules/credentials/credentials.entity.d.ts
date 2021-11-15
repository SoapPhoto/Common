import { BaseEntity } from 'typeorm';
import { OauthType } from '../../../enum/router';
import { UserEntity } from '../user/user.entity';
import { IOauthUserInfo } from '../user/user.interface';

export declare class CredentialsEntity extends BaseEntity {
  readonly id: string;

  type: OauthType;

  readonly user: UserEntity;

  readonly info?: IOauthUserInfo;

  get isActive(): boolean;
}
