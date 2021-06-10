import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSessionUseCase } from "./CreateSessionUseCase";


class CreateSessionController {
    async handle(request: Request, response: Response): Promise<any> {
        try {
            const {email, password} = request.body

            const createSessionUseCase = container.resolve(CreateSessionUseCase)

            const token = await createSessionUseCase.execute({email, password})

            return response.json( token)
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateSessionController }