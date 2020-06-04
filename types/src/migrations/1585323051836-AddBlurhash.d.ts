import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddBlurhash1585323051836 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
