import compression from "compression";
import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";

import "express-async-errors";

import routes from "./routes";

const app = express();

app.use(express.json())
    .use(cors())
    .use(compression())
    .use(helmet())
    .use("/api", routes)
    .use((error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof Error) {
            return response.status(400).json({
                message: error.message,
            });
        }

        response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });

        return next();
    })
    .get("/", (req: Request, res: Response) => {
        return res.status(200).json({
            status: "GALHARDO FINANCES HTTP REST API is working",
        });
    });

export default app;
