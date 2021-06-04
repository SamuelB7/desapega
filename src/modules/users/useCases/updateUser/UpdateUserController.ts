import { Request, Response } from "express";
import { container } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { FindUserByIdUseCase } from "../findById/FindUserByIdUseCase";
import { UpadateUserUseCase } from "./UpdateUserUseCase";


class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password, tel } = request.body
            const { id } = request.params
            
            const updateUserUseCase = container.resolve(UpadateUserUseCase)
            const findUserByIdUseCase = container.resolve(FindUserByIdUseCase)

            const user = await findUserByIdUseCase.execute(id) 

            if(request.file) {
                await deleteFile(`./users_avatars/${user.avatar}`)
                const avatar = request.file.filename
                updateUserUseCase.execute({id, name, email, password, tel, avatar})

                return response.status(200).send()
            }

            updateUserUseCase.execute({id, name, email, password, tel, avatar: user.avatar})

            return response.status(200).send()

        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { UpdateUserController }