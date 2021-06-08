import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductsRepository";

@injectable()
class DeleteProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRespository: IProductRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this.productRespository.delete(id)
    }
}

export { DeleteProductUseCase }