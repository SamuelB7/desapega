import { Router } from "express";
import { CreateSessionController } from "../modules/users/useCases/createSession/CreateSessionController";

const sessionRoutes = Router()

const createSessionController = new CreateSessionController()

sessionRoutes.post('/session', createSessionController.handle)

export { sessionRoutes }