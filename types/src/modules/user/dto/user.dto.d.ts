import { UserEntity } from '../user.entity';
/**
 * 注册管道
 *
 * @export
 * @class CreateUserDto
 */
export declare class CreateUserDto {
    /**
     * 邮箱
     *
     * @type {string}
     * @memberof CreateUserDto
     */
    readonly email: string;
    /**
     * 用户名
     *
     * @type {string}
     * @memberof CreateUserDto
     */
    readonly username: string;
    /**
     * 密码
     *
     * @type {string}
     * @memberof CreateUserDto
     */
    readonly password: string;
}
/**
 * 修改用户信息管道
 *
 * @export
 * @class UpdateProfileSettingDto
 */
export declare class UpdateProfileSettingDto implements Partial<UserEntity> {
    /** 昵称 */
    readonly name: string;
    /** 个人简介 */
    readonly bio: string;
    /** 个人网站 */
    readonly website: string;
    readonly key: string;
}
