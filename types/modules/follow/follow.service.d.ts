import { Repository } from 'typeorm';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { FollowEntity } from './follow.entity';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { NotificationService } from '../notification/notification.service';
export declare class FollowService {
    private followRepository;
    private readonly userService;
    private readonly notificationService;
    constructor(followRepository: Repository<FollowEntity>, userService: UserService, notificationService: NotificationService);
    create(user: UserEntity, followedId: number): Promise<void>;
    remove(userId: number, followedId: number): Promise<import("typeorm").DeleteResult>;
    followUsers(id: number, query: PaginationDto, type: string, onlyId: boolean): Promise<string[]>;
    followUsers(id: number, query: PaginationDto, type?: string): Promise<UserEntity[]>;
    followerCount(userId: number): Promise<number>;
    followedCount(userId: number): Promise<number>;
    isFollowing(user: UserEntity, followedId: number): Promise<0 | 1 | 2>;
}
