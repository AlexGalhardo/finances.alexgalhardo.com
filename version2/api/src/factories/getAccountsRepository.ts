/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { IAccountsRepository } from "../ports/IAccountsRepository";
import JSONAccountsRepository from "../repositories/json/JSONAccountsRepository";
import MongoDBAccountsRepository from "../repositories/mongodb/MongoDBAccountsRepository";
import PostgresAccountsRepository from "../repositories/postgres/PostgresAccountsRepository";

export const getAccountsRepository = (): IAccountsRepository => {
    return process.env.DATABASE_TO_USE === "postgres"
        ? new PostgresAccountsRepository()
        : process.env.DATABASE_TO_USE === "mongodb"
        ? new MongoDBAccountsRepository()
        : new JSONAccountsRepository();
};
