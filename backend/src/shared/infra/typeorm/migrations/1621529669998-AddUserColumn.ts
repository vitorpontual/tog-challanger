import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUserColumn1621529669998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("users",[
            new TableColumn({
                name: "name",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "avatar",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "isadmin",
                type: "varchar",
                default: "false"
            }),
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                default: "now()"
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("users",[
            new TableColumn({
                name: "name",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "avatar",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "isadmin",
                type: "varchar",
                default: "false"
            }),
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                default: "now()"
            })
        ])
    }

}
