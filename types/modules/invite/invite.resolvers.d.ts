import { UserEntity } from '../user/user.entity';
import { InviteService } from './invite.service';
export declare class InviteResolver {
    private readonly inviteService;
    constructor(inviteService: InviteService);
    createInvite(user: UserEntity): Promise<Record<string, any>>;
}
