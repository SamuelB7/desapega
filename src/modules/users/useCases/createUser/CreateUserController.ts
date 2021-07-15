import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    async handle(request: Request, response: Response): Promise<any> {
        try {
            const { name, email, password, tel } = request.body

            const avatar = request.file.filename

            const createUserUseCase = container.resolve(CreateUserUseCase)

            const user = await createUserUseCase.execute({
                name,
                email,
                password,
                tel,
                avatar
            })
            
            return response.redirect(`${process.env.CLIENT_SIDE_HOST}/user/${user.id}`)
            //return response.json(user)

        } catch (error) {
            return response.json(error.message)
        }
    }
}

export { CreateUserController }