import { IAccountsRepository } from "../ports/IAccountsRepository";
import PostgresAccountsRepository from "../repositories/postgres/PostgresAccountsRepository";

export const getAccountsRepository = (): IAccountsRepository => {
    return new PostgresAccountsRepository();
    // return new MongoDBAccountsRepository();
};
