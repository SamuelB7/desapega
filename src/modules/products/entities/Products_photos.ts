import { Column, Entity } from "typeorm";


@Entity()
class Products_photos {

    @Column()
    file: string

    @Column()
    product_id: string
}

export { Products_photos }