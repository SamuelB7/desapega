import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIdUseCase } from "../findById/FindUserByIdUseCase";
import { UpadateUserUseCase } from "./UpdateUserUseCase";


class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password, tel } = request.body
            const { id } = request.params
            const avatar = request.file.filename

            const updateUserUseCase = container.resolve(UpadateUserUseCase)
            const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)

            updateUserUseCase.execute({id, name, email, password, tel, avatar})

            return response.status(200).send()

        } catch (error) {
            return response.json(error.message)
        }
    }
}