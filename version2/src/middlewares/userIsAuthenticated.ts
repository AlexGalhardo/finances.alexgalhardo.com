import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import PostgresUsersRepository from "../repositories/postgres/PostgresUsersRepository";

export default interface IUserJwtPayload extends jwt.JwtPayload {
    user_id: string;
}

export const userIsAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer") ||
        !req.headers.authorization.split(" ")[1]
    ) {
        return res.status(422).json({
            success: false,
            message: "Please provide the User JWT Token in Header Authorization Bearer Token",
        });
    }

    try {
        const JWT_TOKEN = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(JWT_TOKEN, process.env.JWT_SECRET as string) as IUserJwtPayload;

        const userExists = await new PostgresUsersRepository().userExists(decoded.user_id);

        if (!userExists) {
            return res.status(422).json({
                success: false,
                message: "User jwt token inválid",
            });
        }

        return next();
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: error,
        });
    }
};
