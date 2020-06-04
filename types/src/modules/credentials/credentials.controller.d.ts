import { UserEntity } from '../user/user.entity';
import { CredentialsService } from './credentials.service';
import { AuthorizeDto } from './dto/credentials.dto';
export declare class CredentialsController {
    private credentialsService;
    constructor(credentialsService: CredentialsService);
    getCredentials(user: UserEntity): Promise<import("./credentials.entity").CredentialsEntity[]>;
    revoke(id: string, user: UserEntity): Promise<void>;
    authorize(data: AuthorizeDto, user: UserEntity): Promise<void>;
}
