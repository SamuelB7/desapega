import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>
    findById(id: string): Promise<User>
    findByEmail(email: string): Promise<User>
    update(data: ICreateUserDTO): Promise<void>
    delete(id: string): Promise<void>
}

export { IUserRepository }