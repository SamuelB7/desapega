import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'

@Entity()
class Products_photos {

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

export { Products_photos }