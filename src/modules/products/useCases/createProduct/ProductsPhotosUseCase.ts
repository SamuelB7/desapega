import { inject, injectable } from "tsyringe";
import { IPhotosRepository } from "../../repositories/IPhotosRepository";

@injectable()
class ProductsPhotosUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository
    ) {}

    async execute(file: string, product_id: string): Promise<void> {
        await this.photosRepository.create({file, product_id})
    }
}

export { ProductsPhotosUseCase }