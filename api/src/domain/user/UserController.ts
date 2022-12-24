import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { getUsersRepository } from "../../factories/getUsersRepository";
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

        const response = await new UserRegisterUseCase(getUsersRepository()).execute({
            name,
            email,
            password,
        });

        return res.status(201).json(response);
    }

    async update(req: Request, res: Response) {
        const { userId } = this.getDecodedJwtToken(req);

        const { name, email, password } = req.body;

        const response = await new UserUpdateByIdUseCase(getUsersRepository()).execute({
            id: userId,
            name,
            email,
            password,
        });

        return res.status(response ? 200 : 400).json(response);
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await new UserLoginUseCase(getUsersRepository()).execute({
            email,
            password,
        });

        console.log("user => ", user);

        const jwtToken = jwt.sign(
            {
                userId: user?.id,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" },
        );

        return res.status(200).json({
            success: true,
            message: `${email} login successfully`,
            user_id: user?.id,
            jwt_token: jwtToken,
        });
    }

    async logout(req: Request, res: Response) {
        const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
        const jwtPayload = jwt.verify(JWT_TOKEN as string, process.env.JWT_SECRET as string) as jwt.JwtPayload;

        const response = await new UserLogoutUseCase(getUsersRepository()).execute(jwtPayload.userId);

        return res.status(response ? 200 : 400).json({
            success: true,
            message: `logout successfully`,
        });
    }

    async deleteById(req: Request, res: Response) {
        const { user_id } = req.params;

        const response = await new UserDeleteByIdUseCase(getUsersRepository()).execute(user_id);

        return res.status(response ? 200 : 400).json(response);
    }
}

export default new UserController();
