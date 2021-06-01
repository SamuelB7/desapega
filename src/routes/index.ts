import { response, Router } from 'express'

const router = Router()

router.get('/', (request, response) => {return response.json("Hello World")})

export { router }