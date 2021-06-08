import { Router } from "express";
import multer from "multer";
import uploads from "../config/uploads";
import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";


const productsRoutes = Router()

const photosUpload = multer(uploads.upload('./products_photos'))

const createProductsController = new CreateProductController()

productsRoutes.post('/', photosUpload.array('photos', 7), createProductsController.handle)

export { productsRoutes }