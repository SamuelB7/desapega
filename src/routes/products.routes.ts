import { Router } from "express";
import multer from "multer";
import uploads from "../config/uploads";
import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";
import { FindAllByNameController } from "../modules/products/useCases/findAllByName/FindAllByNameController";
import { FindByIdController } from "../modules/products/useCases/findById/FindByIdController";


const productsRoutes = Router()

const photosUpload = multer(uploads.upload('./products_photos'))

const findByIdController = new FindByIdController()
const findAllByNameController = new FindAllByNameController()
const createProductsController = new CreateProductController()
const deleteProductController = new DeleteProductController()

productsRoutes.get('/:id', findByIdController.handle)
productsRoutes.get('/', findAllByNameController.handle)
productsRoutes.post('/', photosUpload.array('photos', 7), createProductsController.handle)
productsRoutes.delete('/:id', deleteProductController.handle)

export { productsRoutes }