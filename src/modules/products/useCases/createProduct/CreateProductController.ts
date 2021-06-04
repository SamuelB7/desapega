import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";


class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {   
            const {name, description, user_id, category_id} = request.body
            const file = request.files

            const createProductUseCase = container.resolve(CreateProductUseCase)

            const product = await createProductUseCase.execute({name, description, user_id, category_id, file})

            return response.status(201).send()
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateProductController }