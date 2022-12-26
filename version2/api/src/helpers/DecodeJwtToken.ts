import { Request } from "express";
import jwt from "jsonwebtoken";

export function getDecodedJwtToken(req: Request) {
    const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
    return jwt.verify(JWT_TOKEN as string, process.env.JWT_SECRET as string) as jwt.JwtPayload;
}
