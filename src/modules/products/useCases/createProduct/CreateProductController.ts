import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { ProductsPhotosUseCase } from "./ProductsPhotosUseCase";


class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {   
            const {name, description, user_id, category_id} = request.body
            const files = request.files.map as Array<any>

            const createProductUseCase = container.resolve(CreateProductUseCase)
            const product = await createProductUseCase.execute({name, description, user_id, category_id})

            const productsPhotosUseCase = container.resolve(ProductsPhotosUseCase)

            files.forEach(photo => {
                
                productsPhotosUseCase.execute()
            });

            return response.status(201).send()
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateProductController }