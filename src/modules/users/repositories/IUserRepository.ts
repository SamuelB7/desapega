import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUsersDTO";
import { User } from "../entities/User";


interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>
    findById(id: string): Promise<User>
    findByEmail(email: string): Promise<User>
    update(data: IUpdateUserDTO): Promise<void>
    delete(id: string, avatar: string): Promise<void>
}

export { IUserRepository }