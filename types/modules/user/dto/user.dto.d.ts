import { UserEntity } from '../user.entity';
export declare class CreateUserDto {
    readonly email: string;
    readonly username: string;
    readonly password: string;
}
export declare class UpdateProfileSettingDto implements Partial<UserEntity> {
    readonly name: string;
    readonly bio: string;
    readonly website: string;
    readonly gender: number;
    readonly genderSecret: boolean;
    readonly birthday: Date;
    readonly birthdayShow: number;
    readonly key: string;
}
