import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../dtos/IUpdateUsersDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class UpadateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({id, name, email, password, tel, avatar}: IUpdateUserDTO): Promise<void> {
        await this.userRepository.update({id, name, email, password, tel, avatar})
    }
}

export { UpadateUserUseCase }