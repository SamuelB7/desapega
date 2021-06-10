import { inject, injectable } from "tsyringe";
import { IPhotosRepository } from "../../repositories/IPhotosRepository";


@injectable()
class UpdatePhotosUseCase {
    constructor(
        @inject("PhotosRepository")
        private photosRepository: IPhotosRepository
    ) {}

    async execute(file: string, product_id: string): Promise<void> {
        await this.photosRepository.update({file, product_id})
    }
}

export { UpdatePhotosUseCase }