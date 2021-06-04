import { inject, injectable } from "tsyringe";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IPhotosRepository } from "../../repositories/IPhotosRepository";
import { IProductRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    file: string
    name: string
    description: string
    user_id: string
    category_id: string
}

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository
    ) {}

    async execute({name, description, user_id, category_id, file}: IRequest): Promise<void> {
        const product = await this.productRepository.create({
            name,
            description,
            user_id,
            category_id
        }) 

        await this.photosRepository.create({
            file,
            product_id: product.id
        })
    }
}

export { CreateProductUseCase }