import { Repository } from 'typeorm';
import { RedisManager } from '@liaoliaots/nestjs-redis';
import { UserService } from '../user/user.service';
import { CredentialsEntity } from './credentials.entity';
import { UserEntity } from '../user/user.entity';
import { AuthorizeDto } from './dto/credentials.dto';
export declare class CredentialsService {
    private readonly userService;
    private credentialsRepository;
    private readonly redisManager;
    constructor(userService: UserService, credentialsRepository: Repository<CredentialsEntity>, redisManager: RedisManager);
    getInfo: (id: string) => Promise<CredentialsEntity | undefined>;
    create(data: Partial<CredentialsEntity>): Promise<CredentialsEntity>;
    getUserCredentialList(user: UserEntity): Promise<CredentialsEntity[]>;
    authorize(user: UserEntity, { code }: AuthorizeDto): Promise<void>;
    revoke(user: UserEntity, id: string): Promise<void>;
}
