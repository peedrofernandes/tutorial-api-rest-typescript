import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662028966759 implements MigrationInterface {
    name = 'default1662028966759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }

}
