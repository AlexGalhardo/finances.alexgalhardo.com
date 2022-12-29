/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { IUsersRepository } from "../ports/IUsersRepository";
import JSONUsersRepository from "../repositories/json/JSONUsersRepository";
import MongoDBUsersRepository from "../repositories/mongodb/MongoDBUsersRepository";
import PostgresUsersRepository from "../repositories/postgres/PostgresUsersRepository";

export const getUsersRepository = (): IUsersRepository => {
    return process.env.DATABASE_TO_USE === "postgres"
        ? new PostgresUsersRepository()
        : process.env.DATABASE_TO_USE === "mongodb"
        ? new MongoDBUsersRepository()
        : new JSONUsersRepository();
};
