import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdUseCase } from "./FindByIdUseCase";


class FindByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const findByIdUseCase = container.resolve(FindByIdUseCase)

        const product = await findByIdUseCase.execute(id)

        return response.json(product)
    }
}

export { FindByIdController }