import { Router } from "express";
import { FindAllProductsController } from "../modules/products/useCases/findAllProducts/FindAllProductsController";
import { FindByCategoryController } from "../modules/products/useCases/findByCategory/FindByCategoryController";
import { FindByIdController } from "../modules/products/useCases/findById/FindByIdController";


const productsRoutes = Router()

const findByIdController = new FindByIdController()
const findAllProductsController = new FindAllProductsController()
const findByCategoryController = new FindByCategoryController()

productsRoutes.get('/', findAllProductsController.handle)
productsRoutes.get('/:id', findByIdController.handle)
productsRoutes.get('/category/:category_id', findByCategoryController.handle)

export { productsRoutes }