import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByCategoryUseCase } from "./FindByCategoryUseCase";


class FindByCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { category_id } = request.params

            const findByCategoryUseCase = container.resolve(FindByCategoryUseCase)

            const products = await findByCategoryUseCase.execute(category_id)
            products.forEach(product => {
                let photoPath = `${request.protocol}://${request.headers.host}/${product.file}`
                product.file = photoPath

                /* let productPrice = `R$${product.price}`
                product.price = productPrice */
            })

            return response.json(products)
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { FindByCategoryController }