import { Request, Response } from "express";

import { getTransactionsRepository } from "../../factories/getTransactionsRepository";
import CreateTransactionUseCase from "./CreateTransactionUseCase";
import DeleteTransactionByIdUseCase from "./DeleteTransactionByIdUseCase";
import GetAllTransactionsUseCase from "./GetAllTransactionsUseCase";
import GetTransactionsByCategoryUseCase from "./GetTransactionsByCategoryUseCase";
import UpdateTransactionByIdUseCase from "./UpdateTransactionByIdUseCase";

class TransactionsController {
    async getAllTransactions(req: Request, res: Response) {
        const allTransactions = await new GetAllTransactionsUseCase(getTransactionsRepository()).execute();
        return res.status(allTransactions ? 200 : 404).json(allTransactions);
    }

    async getTransactionsByCategory(req: Request, res: Response) {
        const { category } = req.body;

        const response = await new GetTransactionsByCategoryUseCase(getTransactionsRepository()).execute(category);

        return res.status(response ? 200 : 400).json(response);
    }

    async createTransaction(req: Request, res: Response) {
        const { type, category, description, total } = req.body;

        const response = await new CreateTransactionUseCase(getTransactionsRepository()).execute({
            type,
            category,
            description,
            total,
        });

        return res.status(response ? 200 : 400).json(response);
    }

    async updateTransactionById(req: Request, res: Response) {
        const { transaction_id } = req.params;
        const { type, category, description, total } = req.body;

        const response = await new UpdateTransactionByIdUseCase(getTransactionsRepository()).execute({
            id: transaction_id,
            type,
            category,
            description,
            total,
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
