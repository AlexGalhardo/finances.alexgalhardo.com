import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { getTransactionsRepository } from "../../factories/getTransactionsRepository";
import { getDecodedJwtToken } from "../../helpers/DecodeJwtToken";
import CreateTransactionUseCase from "./CreateTransactionUseCase";
import DeleteTransactionByIdUseCase from "./DeleteTransactionByIdUseCase";
import GetAllTransactionsUseCase from "./GetAllTransactionsUseCase";
import GetTransactionsByCategoryUseCase from "./GetTransactionsByCategoryUseCase";
import UpdateTransactionByIdUseCase from "./UpdateTransactionByIdUseCase";

class TransactionsController {
    async getAllTransactions(req: Request, res: Response) {
        const allTransactions = await new GetAllTransactionsUseCase(getTransactionsRepository()).execute(
            getDecodedJwtToken(req).user_id,
        );

        return res.status(allTransactions ? 200 : 404).json(allTransactions);
    }

    async getTransactionsByCategory(req: Request, res: Response) {
        const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
        const jwtPayload = jwt.verify(JWT_TOKEN as string, process.env.JWT_SECRET as string) as jwt.JwtPayload;

        const { category, startDate, finalDate } = req.body;

        const response = await new GetTransactionsByCategoryUseCase(getTransactionsRepository()).execute(
            jwtPayload.user_id,
            category,
            startDate,
            finalDate,
        );

        return res.status(response ? 200 : 400).json(response);
    }

    async createTransaction(req: Request, res: Response) {
        const { type, category, description, amount } = req.body;

        const response = await new CreateTransactionUseCase(getTransactionsRepository()).execute({
            user_id: getDecodedJwtToken(req).user_id,
            type,
            category,
            description,
            amount,
        });

        return res.status(response ? 200 : 400).json(response);
    }

    async updateTransactionById(req: Request, res: Response) {
        const { transaction_id } = req.params;
        const { type, category, description, amount } = req.body;

        const response = await new UpdateTransactionByIdUseCase(getTransactionsRepository()).execute({
            id: transaction_id,
            type,
            category,
            description,
            amount,
        });

        return res.status(response ? 200 : 400).json(response);
    }

    async deleteTransactionById(req: Request, res: Response) {
        const { transaction_id } = req.params;

        const response = await new DeleteTransactionByIdUseCase(getTransactionsRepository()).execute(transaction_id);

        return res.status(response ? 200 : 400).json(response);
    }
}

export default new TransactionsController();
