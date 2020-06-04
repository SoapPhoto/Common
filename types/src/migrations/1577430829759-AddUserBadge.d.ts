import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddUserBadge1577430829759 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
