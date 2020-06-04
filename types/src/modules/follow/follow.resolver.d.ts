import { FollowService } from './follow.service';
import { UserEntity } from '../user/user.entity';
import { FollowUserDto, FollowUsersDto } from './dto/follow.dto';
export declare class FollowResolver {
    private readonly followService;
    constructor(followService: FollowService);
    followerUsers(input: FollowUsersDto): Promise<UserEntity[]>;
    followedUsers(input: FollowUsersDto): Promise<UserEntity[]>;
    followUser(user: UserEntity, input: FollowUserDto): Promise<{
        done: boolean;
    }>;
    unFollowUser(user: UserEntity, input: FollowUserDto): Promise<{
        done: boolean;
    }>;
}
