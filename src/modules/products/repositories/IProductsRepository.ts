import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../dtos/IUpdateProductDTO";
import { Product } from "../entities/Product";


interface IProductRepository {
    create(data: ICreateProductDTO): Promise<Product>
    findAllByName(name: string): Promise<Product[]>
    findById(id: string): Promise<Product>
    update(data: IUpdateProductDTO): Promise<void>
    delete(id: string): Promise<void>
}

export { IProductRepository }