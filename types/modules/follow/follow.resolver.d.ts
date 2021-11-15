import { PaginationDto } from '../../common/dto/pagination.dto';
import { FollowService } from './follow.service';
import { UserEntity } from '../user/user.entity';
import { FollowUserDto } from './dto/follow.dto';
export declare class FollowResolver {
    private readonly followService;
    constructor(followService: FollowService);
    followerUsers(id: number, query: PaginationDto): Promise<UserEntity[]>;
    followedUsers(id: number, query: PaginationDto): Promise<UserEntity[]>;
    followUser(user: UserEntity, input: FollowUserDto): Promise<{
        done: boolean;
    }>;
    unFollowUser(user: UserEntity, input: FollowUserDto): Promise<{
        done: boolean;
    }>;
}
