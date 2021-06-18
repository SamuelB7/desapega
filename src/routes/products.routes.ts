import { Router } from "express";
import { FindAllProductsController } from "../modules/products/useCases/findAllProducts/FindAllProductsController";
import { FindByIdController } from "../modules/products/useCases/findById/FindByIdController";


const productsRoutes = Router()

const findByIdController = new FindByIdController()
const findAllProductsController = new FindAllProductsController()

productsRoutes.get('/:id', findByIdController.handle)
productsRoutes.get('/', findAllProductsController.handle)

export { productsRoutes }