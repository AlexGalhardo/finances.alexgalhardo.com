import { Request, Response } from "express";

import { getFinancesRepository } from "../../factories/getFinancesRepository";
import CreateTransactionUseCase from "./CreateTransactionUseCase";
import DeleteTransactionByIdUseCase from "./DeleteTransactionByIdUseCase";
import GetAllTransactionsUseCase from "./GetAllTransactionsUseCase";
import GetTransactionsByCategoryUseCase from "./GetTransactionsByCategoryUseCase";
import UpdateTransactionByIdUseCase from "./UpdateTransactionByIdUseCase";

class FinancesController {
    async getAllTransactions(req: Request, res: Response) {
        const allTransactions = await new GetAllTransactionsUseCase(getFinancesRepository()).execute();
        return res.status(allTransactions ? 200 : 404).json(allTransactions);
    }

    async getTransactionsByCategory(req: Request, res: Response) {
        const { category } = req.body;

        const { httpStatusCodeResponse, response } = await new GetTransactionsByCategoryUseCase(
            getFinancesRepository(),
        ).execute(category);

        return res.status(httpStatusCodeResponse).json(response);
    }

    async createTransaction(req: Request, res: Response) {
        const { type, category, description, total } = req.body;

        const { httpStatusCodeResponse, response } = await new CreateTransactionUseCase(
            getFinancesRepository(),
        ).execute({
            type,
            category,
            description,
            total,
        });

        return res.status(httpStatusCodeResponse).json(response);
    }

    async updateTransactionById(req: Request, res: Response) {
        const { transaction_id } = req.params;
        const { type, category, description, total } = req.body;

        const { httpStatusCodeResponse, response } = await new UpdateTransactionByIdUseCase(
            getFinancesRepository(),
        ).execute({
            id: transaction_id,
            type,
            category,
            description,
            total,
        });

        return res.status(httpStatusCodeResponse).json(response);
    }

    async deleteTransactionById(req: Request, res: Response) {
        const { transaction_id } = req.params;

        const { httpStatusCodeResponse, response } = await new DeleteTransactionByIdUseCase(
            getFinancesRepository(),
        ).execute(transaction_id);

        return res.status(httpStatusCodeResponse).json(response);
    }
}

export default new FinancesController();
