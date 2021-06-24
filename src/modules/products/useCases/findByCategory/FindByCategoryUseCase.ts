import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
class FindByCategoryUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    async execute(category_id: string): Promise<Product[]> {
        const products = await this.productRepository.findAllByCategory(category_id)
        return products
    }
}

export { FindByCategoryUseCase }