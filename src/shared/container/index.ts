import { container } from 'tsyringe'
import { ProductRepository } from '../../modules/products/repositories/implementations/ProductRepository'
import { IProductRepository } from '../../modules/products/repositories/IProductsRepository'

import { UserRepository } from '../../modules/users/repositories/implementations/UserRepository'
import { IUserRepository } from '../../modules/users/repositories/IUserRepository'

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<IProductRepository>(
    "ProductRepository",
    ProductRepository
)