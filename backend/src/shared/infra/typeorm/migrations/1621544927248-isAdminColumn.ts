import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class isAdminColumn1621544927248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", 
        new TableColumn({
            name: "isadmin",
            type: "boolean",
            default: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "isadmin")
    }

}
