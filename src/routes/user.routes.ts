import { Router } from "express";
import multer from "multer";
import uploads from "../config/uploads";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

const userRoutes = Router()

const uploadAvatar = multer(uploads.upload('./users_avatars'))

const createUserController = new CreateUserController()

userRoutes.post('/', uploadAvatar.single('avatar'), createUserController.handle)

export { userRoutes }