import { Server, Socket } from 'socket.io';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { LoggingService } from '../shared/logging/logging.service';
import { UserEntity } from '../modules/user/user.entity';
import { EventsService } from './events.service';
interface IUserClientData {
    clientId: string;
}
export declare class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private readonly logger;
    private readonly eventsService;
    server: Server;
    data: Record<string, IUserClientData>;
    constructor(logger: LoggingService, eventsService: EventsService);
    handleConnection(client: Socket): void;
    afterInit(_server: Server): void;
    handleDisconnect(client: Socket): void;
    connectUser(client: Socket, _data: any): Promise<{
        event: string;
        data: {
            unread: number;
        };
    }>;
    notify(client: Socket, _data: any): {
        event: string;
        data: {
            client: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap>;
            hello: string;
        };
    };
    emitMessage<T>(event: string, data: T): void;
    emitUserMessage<T>(user: UserEntity, event: string, data: T): Promise<void>;
}
export {};
