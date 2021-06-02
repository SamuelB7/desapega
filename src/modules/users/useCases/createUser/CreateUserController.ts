import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password, tel } = request.body

            const avatar = request.file.filename

            const createUserUseCase = container.resolve(CreateUserUseCase)

            await createUserUseCase.execute({
                name,
                email,
                password,
                tel,
                avatar
            })

            return response.status(201).send()

        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateUserController }