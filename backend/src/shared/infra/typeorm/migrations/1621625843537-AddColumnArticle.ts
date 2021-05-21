import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class AddColumnArticle1621625843537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("articles", [
            new TableColumn({
                name: "price",
                type: "integer",
                isNullable: true,
            }),
            new TableColumn({
                name: "tags",
                type: "varchar",
                isNullable: true
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("articles", [
            new TableColumn({
                name: "price",
                type: "integer",
                isNullable: true,
            }),
            new TableColumn({
                name: "tags",
                type: "varchar",
                isNullable: true
            })
        ])
    }

}
