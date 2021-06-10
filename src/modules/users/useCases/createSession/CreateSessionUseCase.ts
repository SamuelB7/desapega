import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: {
        id: string
        name: string
        email: string
        avatar: string
    },
    token: string
}

@injectable()
class CreateSessionUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}
    
    async execute({email, password}: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email)
        if(!user) {
            throw new Error("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch) {
            throw new Error("Email or password incorrect!");
        }

        const token = sign({}, process.env.MD5_HASH, {
            subject: user.id,
            expiresIn: '1d'
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar
            }
        }

        return tokenReturn
    }

}

export { CreateSessionUseCase }