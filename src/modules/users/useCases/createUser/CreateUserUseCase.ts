import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password, tel, avatar}: ICreateUserDTO): Promise<void> {
        const user = await this.userRepository.findByEmail(email)
        if(user) {
            throw new Error("User already registered!")
        }

        const passwordHash = await hash(password, 7)

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            tel,
            avatar
        })
    }
}

export { CreateUserUseCase }