import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddAvatarRead1621553542713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("reads", 
        new TableColumn({
            name: "image",
            type: "varchar",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("reads", "image")
    }

}
