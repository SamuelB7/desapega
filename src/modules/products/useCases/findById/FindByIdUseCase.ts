import { inject, injectable } from "tsyringe";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductsRepository";


@injectable()
class FindByIdUseCase {
    constructor(
        @inject("ProductRepository")
        private productReposiotry: IProductRepository
    ) {}

    async execute(id: string): Promise<Product> {
        const product = await this.productReposiotry.findById(id)
        return product
    }
}

export { FindByIdUseCase }