import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { ProductsPhotosUseCase } from "./ProductsPhotosUseCase";


class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {   
            const {name, description, category_id, price} = request.body
            const user_id = request.user.id
            const files = request.files as Array<any>

            const createProductUseCase = container.resolve(CreateProductUseCase)
            const product = await createProductUseCase.execute({name, description, user_id, category_id, price})

            const productsPhotosUseCase = container.resolve(ProductsPhotosUseCase)

            files.forEach(async photo => {
                const file = photo.filename
                const product_id = product.id
                await productsPhotosUseCase.execute(file, product_id)
            });
            
            return response.status(201).send()
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateProductController }