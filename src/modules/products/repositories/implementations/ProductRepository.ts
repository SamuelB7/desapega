import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../IProductsRepository";


class ProductRepository implements IProductRepository {
    private repository: Repository<Product>

    constructor() {
        this.repository = getRepository(Product)
    }

    async create({name, description, user_id, category_id}: ICreateProductDTO): Promise<void> {
        const product = await this.repository.create({
            name,
            description,
            user_id,
            category_id
        })

        await this.repository.save(product)
    }

    async findAllByName(name: string): Promise<Product[]> {
        const products = await this.repository.find({name})
        return products
    }

    async findById(id: string): Promise<Product> {
        const product = await this.repository.findOne(id)
        return product
    }

    async update(data: IUpdateProductDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}

export { ProductRepository }