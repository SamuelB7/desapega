import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindUserByIdUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<User> {  
        const user = await this.userRepository.findById(id)
        
        return user
    }
}

export { FindUserByIdUseCase }