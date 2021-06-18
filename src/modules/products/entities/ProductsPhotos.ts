import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'
import { User } from "../../users/entities/User";
import { Product } from "./Product";

@Entity()
class ProductsPhotos {

    @PrimaryColumn()
    id: string 

    @Column()
    file: string

    @Column()
    product_id: string

    @ManyToOne(() => Product)
    @JoinColumn({name: "product_id"})
    product: Product

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { ProductsPhotos }