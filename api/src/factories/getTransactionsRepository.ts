import { ITransactionsRepository } from "../ports/ITransactionsRepository";
import PostgresTransactionsRepository from "../repositories/postgres/PostgresTransactionsRepository";

export const getTransactionsRepository = (): ITransactionsRepository => {
    return new PostgresTransactionsRepository();
    // return new MongoDBTransactionsRepository();
};
