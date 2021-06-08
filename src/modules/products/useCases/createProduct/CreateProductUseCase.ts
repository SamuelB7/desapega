import { inject, injectable } from "tsyringe";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    async execute({name, description, user_id, category_id, price}: ICreateProductDTO): Promise<Product> {
        const product = await this.productRepository.create({
            name,
            description,
            user_id,
            category_id,
            price
        }) 

        return product
    }
}

export { CreateProductUseCase }