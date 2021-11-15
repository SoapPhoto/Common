import { OauthStateType } from '../../../../enum/oauthState';

export declare class OauthQueryDto {
  code: string;

  state: OauthStateType;
}
export declare class ActiveUserDto {
  username: string;

  code: string;

  name: string;
}
