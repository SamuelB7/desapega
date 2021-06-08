import { getRepository, Repository } from "typeorm";
import { ProductsPhotos } from "../../entities/ProductsPhotos";
import { IPhotosRepository } from "../IPhotosRepository";

interface IRequest {
    file: string
    product_id: string
}

class PhotosRepository implements IPhotosRepository {
    private repository: Repository<ProductsPhotos>

    constructor() {
        this.repository = getRepository(ProductsPhotos)
    }

    async create({file, product_id}: IRequest): Promise<void> {
        const photo = await this.repository.create({
            file,
            product_id
        })

        await this.repository.save(photo)
    }

    async findAllByProductId(product_id: string): Promise<ProductsPhotos[]> {
        const photos = await this.repository.find({product_id})
        return photos
    }
}

export { PhotosRepository }