/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { ITransactionsRepository } from "../ports/ITransactionsRepository";
import JSONTransactionsRepository from "../repositories/json/JSONTransactionsRepository";
import MongoDBTransactionsRepository from "../repositories/mongodb/MongoDBTransactionsRepository";
import PostgresTransactionsRepository from "../repositories/postgres/PostgresTransactionsRepository";

export const getTransactionsRepository = (): ITransactionsRepository => {
    return process.env.DATABASE_TO_USE === "postgres"
        ? new PostgresTransactionsRepository()
        : process.env.DATABASE_TO_USE === "mongodb"
        ? new MongoDBTransactionsRepository()
        : new JSONTransactionsRepository();
};
