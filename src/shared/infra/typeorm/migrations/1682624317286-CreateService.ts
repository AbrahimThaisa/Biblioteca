import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateService1682624317286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "id_type_service",
                        type: "int"
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    },

                    {
                        name: "service_date",
                        type: "datetime"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKServiceTypeService",
                        referencedTableName: "type_services",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_type_service"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
