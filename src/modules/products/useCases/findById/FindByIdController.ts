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
            price: `R$${foundProduct[0].price}`,
            seller: foundProduct[0].user.name,
            seller_email: foundProduct[0].user.email,
        }

        const photos = []

        foundProduct[0].products_photos.forEach(photo => {
            photo.file = `${request.protocol}://${request.headers.host}/${photo.file}`
            photos.push(photo.file)
        })
        
        return response.json({product, photos})
    }
}

export { FindByIdController }