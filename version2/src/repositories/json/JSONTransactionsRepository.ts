/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import { Transaction } from "@prisma/client";
import { randomUUID } from "crypto";

import prisma from "../../config/prisma";
import DateTime from "../../helpers/DateTime";
import {
    ITransactionsRepository,
    ICreateTransactionParams,
    IUpdateTransactionParams,
} from "../../ports/ITransactionsRepository";

export default class JSONTransactionsRepository implements ITransactionsRepository {
    async getAll(user_id: string): Promise<Transaction[]> {
        const queryResponse = await prisma.transaction.findMany({
            where: {
                user_id,
            },
        });

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

        const transactionsFiltered: Transaction[] = [];

        for (let i = 0; i < queryResponse.length; i++) {
            const created_at = queryResponse[i].created_at.slice(0, 10);
            const dateFormated = `${created_at[3]}${created_at[4]}/${created_at[0]}${created_at[1]}/${created_at[6]}${created_at[7]}${created_at[8]}${created_at[9]}`;
            const dateFormatedTimestamp = new Date(dateFormated).getTime();

            if (
                category === "ALL"
                    ? true
                    : queryResponse[i].category === category &&
                      dateFormatedTimestamp >= new Date(startDate).getTime() &&
                      dateFormatedTimestamp <= new Date(finalDate).getTime()
            ) {
                transactionsFiltered.push(queryResponse[i]);
            }
        }

        return transactionsFiltered;
    }

    async create(transactionObject: ICreateTransactionParams): Promise<Transaction | null> {
        const { user_id, description, amount } = transactionObject;
        let { type, category } = transactionObject;
        type = type.toUpperCase();
        category = category.toUpperCase();

        const Account = await prisma.account.findFirst({
            where: {
                user_id,
            },
        });

        if (Account) {
            type === "DEPOSIT"
                ? (Account.current_balance += amount)
                : type === "EXPENSE"
                    ? (Account.total_expenses += amount)
                    : (Account.investments_total += amount);

            switch (category) {
            case "FOOD":
                Account.total_food += amount;
                break;
            case "SUBSCRIPTIONS":
                Account.total_subscriptions += amount;
                break;
            case "SHOP":
                Account.total_shop += amount;
                break;
            case "ENTERTAINMENT":
                Account.total_entertainment += amount;
                break;
            case "TRANSPORT":
                Account.total_transport += amount;
                break;
            case "HOUSE":
                Account.total_house += amount;
                break;
            case "SERVICES":
                Account.total_services += amount;
                break;
            case "FIXED_INCOME":
                Account.investments_fixed_income += amount;
                break;
            case "VARIABLE_INCOME":
                Account.investments_variable_income += amount;
                break;
            case "CRIPTOCURRENCIES":
                Account.investments_criptocurrencies += amount;
                break;
            default:
                break;
            }

            // if(category === 'FOOD') Account.total_food += amount

            // if(category === 'SUBSCRIPTIONS') Account.total_subscriptions += amount

            // if(category === 'SHOP') Account.total_shop += amount

            // if(category === 'ENTERTAINMENT') Account.total_entertainment += amount

            // if(category === 'TRANSPORT') Account.total_transport += amount

            // if(category === 'HOUSE') Account.total_house += amount

            // if(category === 'SERVICES') Account.total_services += amount

            // if (category === "FIXED_INCOME") Account.investments_fixed_income += amount;

            // if (category === "VARIABLE_INCOME") Account.investments_variable_income += amount;

            // if (category === "CRIPTOCURRENCIES") Account.investments_criptocurrencies += amount;

            await prisma.account.update({
                where: {
                    id: Account.id,
                },
                data: {
                    current_balance: Account.current_balance,
                    total_expenses: Account.total_expenses,
                    total_food: Account.total_food,
                    total_subscriptions: Account.total_subscriptions,
                    total_shop: Account.total_shop,
                    total_entertainment: Account.total_entertainment,
                    total_transport: Account.total_transport,
                    total_house: Account.total_house,
                    total_services: Account.total_services,
                    investments_total: Account.investments_total,
                    investments_fixed_income: Account.investments_fixed_income,
                    investments_variable_income: Account.investments_variable_income,
                    investments_criptocurrencies: Account.investments_criptocurrencies,
                    updated_at: DateTime.getNow(),
                },
            });

            const queryResponse = await prisma.transaction.create({
                data: {
                    id: randomUUID(),
                    user_id,
                    user_email: Account.user_email,
                    account_id: Account.id,
                    type,
                    category,
                    description,
                    amount,
                    created_at: DateTime.getNow(),
                },
            });

            return queryResponse;
        }

        return null;
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

    async deleteById(transactionId: string): Promise<Transaction> {
        const queryResponse = await prisma.transaction.delete({
            where: {
                id: transactionId,
            },
        });

        return queryResponse;
    }
}
