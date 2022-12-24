import { Transaction } from "@prisma/client";
import { randomUUID } from "crypto";

import prisma from "../../config/prisma";
import {
    ITransactionsRepository,
    ICreateTransactionParams,
    IUpdateTransactionsParams,
} from "../../ports/ITransactionsRepository";

export default class PostgresTransactionsRepository implements ITransactionsRepository {
    async getAll(): Promise<Transaction[]> {
        const queryResponse = await prisma.transaction.findMany({});

        return queryResponse;
    }

    async getById(blogId: string): Promise<Transaction> {
        const queryResponse = await prisma.transaction.findUnique({
            where: {
                id: blogId,
            },
        });

        return queryResponse as Transaction;
    }

    async create(transactionObject: ICreateTransactionParams): Promise<Transaction> {
        const { type, category, description, amount } = transactionObject;

        const queryResponse = await prisma.transaction.create({
            data: {
                id: randomUUID(),
                type,
                category,
                description,
                amount,
            },
        });

        return queryResponse;
    }

    async updateById(transactionObject: IUpdateTransactionsParams): Promise<Transaction> {
        const { id, type, category, description, amount } = transactionObject;

        const queryResponse = await prisma.transaction.update({
            where: {
                id,
            },
            data: {
                type,
                category,
                description,
                amount,
            },
        });

        return queryResponse;
    }

    async deleteById(blogId: string): Promise<Transaction> {
        const queryResponse = await prisma.transaction.delete({
            where: {
                id: blogId,
            },
        });

        return queryResponse;
    }
}
