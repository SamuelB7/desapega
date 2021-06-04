import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class productsPhotos1622838945888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products_photos',
                columns: [
                    {
                        name: 'file',
                        type: 'varchar'
                    },
                    {
                        name: 'product_id',
                        type: 'uuid'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKProduct_id',
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        columnNames: ['product_id'],
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products_photos')
    }

}
