import { query } from "express";
import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameTableRead1621558019643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable("reads", "articles")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable("articles", "reads")

    }

}
