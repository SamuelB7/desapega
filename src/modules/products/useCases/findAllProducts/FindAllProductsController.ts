import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindAllProductsUseCase } from "./FindAllProductsUseCase"


class FindAllProductsController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const findAllProductsUseCase = container.resolve(FindAllProductsUseCase)
            const products = await findAllProductsUseCase.execute()
            products.forEach(product => {
                let photoPath = `${request.protocol}://${request.headers.host}/${product.file}`
                product.file = photoPath

                /* let productPrice = `R$${product.price}`
                product.price = productPrice */
            })

            //console.log( `${request.protocol}://${request.headers.host}/${products[0].file}`)
            return response.json(products)
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { FindAllProductsController }