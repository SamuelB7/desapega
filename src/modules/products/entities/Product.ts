import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 }  from 'uuid'

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

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Product }