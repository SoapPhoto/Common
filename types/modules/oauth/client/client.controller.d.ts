import { UserEntity } from '../../user/user.entity';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    addClient(user: UserEntity, param: CreateClientDto): Promise<import("./client.entity").ClientEntity>;
}
