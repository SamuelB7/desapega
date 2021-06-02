import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuiV4 } from 'uuid'

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
    creted_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuiV4()
        }
    }
}

export { User }