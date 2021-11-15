import { Repository } from 'typeorm';
import { InviteEntity } from './invite.entity';
export declare class InviteService {
    private inviteRepository;
    constructor(inviteRepository: Repository<InviteEntity>);
    create(): Promise<InviteEntity>;
}
