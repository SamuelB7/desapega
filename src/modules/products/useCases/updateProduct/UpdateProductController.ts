import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePhotosUseCase } from "./UpdatePhotosUseCase";
import { UpdateProductUseCase } from "./UpdateProductUseCase";


class UpdateProductController {
    async handle(request:Request, response: Response): Promise<Response> {
        try {
            const{ id } = request.params
            const { name, description, price } = request.body

            const updateProductUseCase = container.resolve(UpdateProductUseCase)
            await updateProductUseCase.execute({id, name, description, price})

            const updatePhotosUseCase = container.resolve(UpdatePhotosUseCase)
            updatePhotosUseCase.execute()

        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { UpdateProductController }