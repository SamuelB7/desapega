import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllByNameUseCase } from "./FindAllByNameUseCase";


class FindAllByNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.query 
        
        const findAllByNameUseCase = container.resolve(FindAllByNameUseCase)

        const products = await findAllByNameUseCase.execute(name)
        
        return response.json(products)
    }
}

export { FindAllByNameController }