import { Transaction } from "@prisma/client";
import { randomUUID } from "crypto";

import prisma from "../../config/prisma";
import {
    ITransactionsRepository,
    ICreateTransactionParams,
    IUpdateTransactionParams,
} from "../../ports/ITransactionsRepository";

export default class PostgresTransactionsRepository implements ITransactionsRepository {
    async getAll(user_id: string): Promise<Transaction[]> {
        const queryResponse = await prisma.transaction.findMany({
            where: {
                user_id,
            },
        });
        console.log("queryResponse =>>>> ", queryResponse);

        return queryResponse as Transaction[];
    }

    async getAllByCategory(
        user_id: string,
        category: string,
        startDate: string,
        finalDate: string,
    ): Promise<Transaction[]> {
        const queryResponse = await prisma.transaction.findMany({
            where: {
                category,
                user_id,
            },
        });

        // todo
        // get only transactions in date interval

        return queryResponse as Transaction[];
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

    async updateById(transactionObject: IUpdateTransactionParams): Promise<Transaction> {
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
