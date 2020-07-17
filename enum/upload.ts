import { $enum } from 'ts-enum-util';

export enum UploadType {
  PICTURE = 'PICTURE',
  AVATAR = 'AVATAR',
  USER_COVER = 'USER_COVER',
}

export const UploadTypeValues = $enum(UploadType).map(key => UploadType[key]);
