import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1622585665806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'user',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true
                        },
                        {
                            name: 'name',
                            type: 'varchar'
                        },
                        {
                            name: 'email',
                            type: 'varchar'
                        },
                        {
                            name: 'password',
                            type: 'varchar'
                        },
                        {
                            name: 'tel',
                            type: 'varchar'
                        },
                        {
                            name: 'avatar',
                            type: 'varchar'
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()'
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
