import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
class FindAllProductsUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){}
    
    async execute(): Promise<Product[]> {
        const product = await this.productRepository.findAllProducts()
        return product
    }
}

export { FindAllProductsUseCase }