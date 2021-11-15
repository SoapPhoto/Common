import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddPictureDeleted1593851551985 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
