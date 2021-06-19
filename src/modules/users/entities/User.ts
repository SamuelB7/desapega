import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuiV4 } from 'uuid'
import { Product } from "../../products/entities/Product";

@Entity('user')
class User {
    
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    tel: string

    @Column()
    avatar: string

    @CreateDateColumn()
    created_at: Date

    @OneToMany(() => Product, product => product.user)
    product: Product

    constructor() {
        if(!this.id) {
            this.id = uuiV4()
        }
    }
}

export { User }