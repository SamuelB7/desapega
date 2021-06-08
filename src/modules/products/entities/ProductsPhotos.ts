import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'

@Entity()
class ProductsPhotos {

    @PrimaryColumn()
    id: string 

    @Column()
    file: string

    @Column()
    product_id: string

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { ProductsPhotos }