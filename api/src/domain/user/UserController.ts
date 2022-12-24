import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { makeUsersRepository } from "../../factories/makeUsersRepository";
import UserDeleteByIdUseCase from "./UserDeleteByIdUseCase";
import UserLoginUseCase from "./UserLoginUseCase";
import UserLogoutUseCase from "./UserLogoutUseCase";
import UserRegisterUseCase from "./UserRegisterUseCase";
import UserUpdateByIdUseCase from "./UserUpdateByIdUseCase";

class UserController {
    private getDecodedJwtToken(req: Request) {
        const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
        return jwt.verify(JWT_TOKEN as string, process.env.JWT_SECRET as string) as jwt.JwtPayload;
    }

    async register(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const { httpStatusCodeResponse, response } = await new UserRegisterUseCase(makeUsersRepository()).execute({
            name,
            email,
            password,
        });

        return res.status(httpStatusCodeResponse).json(response);
    }

    async update(req: Request, res: Response) {
        const { userId } = this.getDecodedJwtToken(req);

        const { name, email, password } = req.body;

        const { httpStatusCodeResponse, response } = await new UserUpdateByIdUseCase(makeUsersRepository()).execute({
            id: userId,
            name,
            email,
            password,
        });

        return res.status(httpStatusCodeResponse).json(response);
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const { httpStatusCodeResponse, response } = await new UserLoginUseCase(makeUsersRepository()).execute({
            email,
            password,
        });

        return res.status(httpStatusCodeResponse).json(response);
    }

    async logout(req: Request, res: Response) {
        const { httpStatusCodeResponse, response } = await new UserLogoutUseCase(makeUsersRepository()).execute(
            this.getDecodedJwtToken(req).userId,
        );

        return res.status(httpStatusCodeResponse).json(response);
    }

    async deleteById(req: Request, res: Response) {
        const { user_id } = req.params;

        const { httpStatusCodeResponse, response } = await new UserDeleteByIdUseCase(makeUsersRepository()).execute(
            user_id,
        );

        return res.status(httpStatusCodeResponse).json(response);
    }
}

export default new UserController();
