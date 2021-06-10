import { ProductsPhotos } from "../entities/ProductsPhotos";

interface IRequest {
    file: string
    product_id: string
}

interface IPhotosRepository {
    create({file, product_id}: IRequest): Promise<void>
    update({file, product_id}: IRequest): Promise<void>
    findAllByProductId(product_id: string): Promise<ProductsPhotos[]>
}

export { IPhotosRepository }