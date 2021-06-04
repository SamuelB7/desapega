import { Router } from "express";
import multer from "multer";
import uploads from "../config/uploads";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { FindUserByIdController } from "../modules/users/useCases/findById/FindUserByIdController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";

const userRoutes = Router()

const uploadAvatar = multer(uploads.upload('./users_avatars'))

const findUserByIdController = new FindUserByIdController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

userRoutes.get('/:id', findUserByIdController.handle)
userRoutes.post('/', uploadAvatar.single('avatar'), createUserController.handle)
userRoutes.patch('/:id', uploadAvatar.single('avatar'), updateUserController.handle)
userRoutes.delete('/', deleteUserController.handle)

export { userRoutes }