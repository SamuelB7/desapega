import { response, Router } from 'express'
import { userRoutes } from './user.routes'

const router = Router()

router.get('/', (request, response) => {return response.json("Hello World")})

router.use('/user', userRoutes)

export { router }