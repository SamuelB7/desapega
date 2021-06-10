import { Router } from "express";
import { FindAllByNameController } from "../modules/products/useCases/findAllByName/FindAllByNameController";
import { FindByIdController } from "../modules/products/useCases/findById/FindByIdController";


const productsRoutes = Router()

const findByIdController = new FindByIdController()
const findAllByNameController = new FindAllByNameController()

productsRoutes.get('/:id', findByIdController.handle)
productsRoutes.get('/', findAllByNameController.handle)

export { productsRoutes }