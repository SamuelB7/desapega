import { Router } from "express";
import multer from "multer";
import uploads from "../config/uploads";


const productsRoutes = Router()

const photosUpload = multer(uploads.upload('./products_photos'))

export { productsRoutes }