import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductUseCase } from "./DeleteProductUseCase";


class DeleteProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params
            
            const deleteProductUseCase = container.resolve(DeleteProductUseCase)
            await deleteProductUseCase.execute(id)

            return response.status(200).send()
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { DeleteProductController }