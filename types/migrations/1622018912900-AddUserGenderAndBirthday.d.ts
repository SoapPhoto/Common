import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddUserGenderAndBirthday1622018912900 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
