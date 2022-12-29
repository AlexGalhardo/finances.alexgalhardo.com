import { Request } from "express";
import jwt from "jsonwebtoken";

export function getDecodedJwtToken(req: Request) {
    const JWT_TOKEN = req.headers.authorization?.split(" ")[1];

    if (!JWT_TOKEN) {
        return {
            user_id: "54e526ea-4c31-48d2-85ef-91e369be2343",
        };
    }

    return jwt.verify(JWT_TOKEN as string, process.env.JWT_SECRET as string) as jwt.JwtPayload;
}
