import 'reflect-metadata'
import express from 'express'
import { router } from './routes'
import './database'
import './shared/container'


const app = express()

app.use(express.json())

app.use(express.static('products_photos'))
app.use(express.static('users_avatars'))

app.use(router)

app.listen(7777, () => console.log("Server is running!"))