import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBookTable1600609429710 implements MigrationInterface {
    name = 'CreateBookTable1600609429710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "author" text NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
