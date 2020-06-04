import { Repository } from 'typeorm';
import { FollowEntity } from './follow.entity';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { FollowUsersDto } from './dto/follow.dto';
import { NotificationService } from '../notification/notification.service';
export declare class FollowService {
    private followRepository;
    private readonly userService;
    private readonly notificationService;
    constructor(followRepository: Repository<FollowEntity>, userService: UserService, notificationService: NotificationService);
    create(user: UserEntity, followedId: number): Promise<void>;
    remove(userId: number, followedId: number): Promise<import("typeorm").DeleteResult>;
    /**
     * 获取用户的关注或者粉丝列表
     *
     * @param {number} id
     * @param {FollowUsersDto} input
     * @param {string} [type='follower']
     * @param {boolean} [onlyId]
     * @returns
     * @memberof FollowService
     */
    followUsers(input: FollowUsersDto, type: string, onlyId: boolean): Promise<string[]>;
    followUsers(input: FollowUsersDto, type?: string): Promise<UserEntity[]>;
    followerCount(userId: number): Promise<number>;
    followedCount(userId: number): Promise<number>;
    isFollowing(user: UserEntity, followedId: number): Promise<1 | 2 | 0>;
}
