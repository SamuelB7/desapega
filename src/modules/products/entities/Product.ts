import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 }  from 'uuid'
import { User } from "../../users/entities/User";
import { ProductsPhotos } from "./ProductsPhotos";

@Entity('products')
class Product {

    @PrimaryColumn()
    id: string

    @Column()
    name: string
    
    @Column()
    description: string

    @Column()
    user_id: string

    @Column()
    category_id: string

    @Column()
    price: number

    @CreateDateColumn()
    created_at: Date

    @OneToMany(() => ProductsPhotos, products_photos => products_photos.product)
    products_photos: ProductsPhotos[]

    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Product }