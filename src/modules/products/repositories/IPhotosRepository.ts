import { Products_photos } from "../entities/Products_photos";

interface IRequest {
    file: string
    product_id: string
}

interface IPhotosRepository {
    create({file, product_id}: IRequest): Promise<void>
    findAllByProductId(product_id: string): Promise<Products_photos[]>
}

export { IPhotosRepository }