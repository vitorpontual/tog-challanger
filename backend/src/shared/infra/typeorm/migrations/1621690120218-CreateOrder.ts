import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrder1621690120218 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "seller_id",
                        type: "uuid",
                    },
                    {
                        name: "buyer_id",
                        type: "uuid",
                    },
                    {
                        name: "articles_id",
                        type: "uuid",
                    },
                    {
                        name: "price",
                        type: "integer"
                    },
                    {
                        name: "total",
                        type: "integer"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKOrdersSeller",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["seller_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKOrdersBuyer",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["seller_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKOrdersArticles",
                        referencedTableName: "articles",
                        referencedColumnNames: ["id"],
                        columnNames: ["articles_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders")
    }

}
