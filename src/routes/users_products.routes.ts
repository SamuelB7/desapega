import { Router } from "express";
import multer from "multer";
import uploads from "../config/uploads";
import { isLogged } from "../middlewares/isLogged";
import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";
import { FindAllByNameController } from "../modules/products/useCases/findAllByName/FindAllByNameController";
import { FindByIdController } from "../modules/products/useCases/findById/FindByIdController";


const users_productsRoutes = Router()

const photosUpload = multer(uploads.upload('./products_photos'))

const findByIdController = new FindByIdController()
const findAllByNameController = new FindAllByNameController()
const createProductsController = new CreateProductController()
const deleteProductController = new DeleteProductController()

users_productsRoutes.use(isLogged)
users_productsRoutes.get('/:id', findByIdController.handle)
users_productsRoutes.get('/', findAllByNameController.handle)
users_productsRoutes.post('/', photosUpload.array('photos', 7), createProductsController.handle)
users_productsRoutes.delete('/:id', deleteProductController.handle)

export { users_productsRoutes }