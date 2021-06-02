import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.body
            
            const deleteUserUseCase = container.resolve(DeleteUserUseCase)

            await deleteUserUseCase.execute(id)

            return response.status(200).json("User deleted")
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { DeleteUserController }