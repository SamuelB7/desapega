import { container } from 'tsyringe'
import { PhotosRepository } from '../../modules/products/repositories/implementations/PhotosRepository'
import { ProductRepository } from '../../modules/products/repositories/implementations/ProductRepository'
import { IPhotosRepository } from '../../modules/products/repositories/IPhotosRepository'
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

container.registerSingleton<IPhotosRepository>(
    "PhotosRepository",
    PhotosRepository
)