import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSessionUseCase } from "./createSessionUseCase";


class CreateSessionController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {email, password} = request.body

            const createSessionUseCase = container.resolve(CreateSessionUseCase)

            const token = await createSessionUseCase.execute({email, password})

            return response.json(token)
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateSessionController }