import { inject, injectable } from "tsyringe";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { IProductRepository } from "../../repositories/IProductsRepository";


@injectable()
class UpdateProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}

    async execute({id, name, description, price}:IUpdateProductDTO): Promise<void> {
        await this.productRepository.update({id, name, description, price})
    }
}

export { UpdateProductUseCase }