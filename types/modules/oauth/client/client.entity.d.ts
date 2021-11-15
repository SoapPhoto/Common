import { BaseEntity } from '../../../common/base.entity';
export declare class ClientEntity extends BaseEntity {
    readonly id: string;
    readonly secret: string;
    readonly grants: string[];
    readonly accessTokenLifetime: number;
    readonly refreshTokenLifetime: number;
}
