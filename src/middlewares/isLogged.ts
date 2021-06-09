import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/users/repositories/implementations/UserRepository";

interface ISub {
    sub: string
}

export async function isLogged(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization
    if(!authHeader) {
        throw new Error('Token missing')
    }

    const [, token] = authHeader.split(' ')
    
    const{ sub: user_id } = verify(token, process.env.MD5_HASH) as ISub

    const userReposiotry = new UserRepository()

    const user = await userReposiotry.findById(user_id)
    if(!user) {
        throw new Error("User not found");
    }

    request.user = {
        id: user_id
    }

    next()
}