import { response, Router } from 'express'
import { productsRoutes } from './products.routes'
import { userRoutes } from './user.routes'

const router = Router()

router.get('/', (request, response) => {return response.json("Hello World")})

router.use('/user', userRoutes)
router.use('/products', productsRoutes)

export { router }