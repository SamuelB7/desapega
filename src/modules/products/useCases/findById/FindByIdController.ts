import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdUseCase } from "./FindByIdUseCase";


class FindByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        
        const findByIdUseCase = container.resolve(FindByIdUseCase)

        const foundProduct = await findByIdUseCase.execute(id)

        const product = {
            id: foundProduct[0].id,
            name: foundProduct[0].name,
            description: foundProduct[0].description,
            price: foundProduct[0].price,
            seller: foundProduct[0].user.name,
            seller_email: foundProduct[0].user.email
        }
        
        return response.json(product)
    }
}

export { FindByIdController }