import { getRepository, Repository } from "typeorm";
import { Products_photos } from "../../entities/Products_photos";
import { IPhotosRepository } from "../IPhotosRepository";

interface IRequest {
    file: string
    product_id: string
}

class PhotosRepository implements IPhotosRepository {
    private repository: Repository<Products_photos>

    constructor() {
        this.repository = getRepository(Products_photos)
    }

    async create({file, product_id}: IRequest): Promise<void> {
        const photo = await this.repository.create({
            file,
            product_id
        })

        await this.repository.save(photo)
    }

    async findAllByProductId(product_id: string): Promise<Products_photos[]> {
        const photos = await this.repository.find({product_id})
        return photos
    }
}

export { PhotosRepository }