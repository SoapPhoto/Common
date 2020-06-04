import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';
import { CreateClientDto } from './dto/client.dto';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: Repository<ClientEntity>);
    getOne: (id: string, secret: string) => Promise<ClientEntity>;
    create: (data: CreateClientDto) => Promise<ClientEntity>;
    getBaseClient: () => Promise<void>;
}
