import { response, Router } from 'express'
import { users_productsRoutes } from './users_products.routes'
import { sessionRoutes } from './session.routes'
import { userRoutes } from './user.routes'

const router = Router()

router.get('/', (request, response) => {return response.json("Hello World")})

router.use('/user', userRoutes)
router.use('/users_products', users_productsRoutes)
router.use(sessionRoutes)

export { router }