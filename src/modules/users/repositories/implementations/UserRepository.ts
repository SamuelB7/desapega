import { getRepository, Repository } from "typeorm";
import { deleteFile } from "../../../../utils/file";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUsersDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({name, email, password, tel, avatar}: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            name,
            email,
            password,
            tel,
            avatar
        })
        await this.repository.save(user)
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user
    }

    async update({id, name, email, password, tel, avatar}: IUpdateUserDTO): Promise<void> {
        await this.repository.update(id, {
            name,
            email,
            password,
            tel,
            avatar
        })
    }

    async delete(id: string, avatar: string): Promise<void> {
        const user = await this.repository.findOne(id)

        await deleteFile(`./users_avatars/${user.avatar}`)

        await this.repository.delete(id)
    }
}

export { UserRepository }