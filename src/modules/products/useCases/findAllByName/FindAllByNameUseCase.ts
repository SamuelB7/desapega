import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
class FindAllByNameUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    async execute(name: string): Promise<Product[]> {
        const products = await this.productRepository.findAllByName(name)

        return products
    }
}

export { FindAllByNameUseCase }