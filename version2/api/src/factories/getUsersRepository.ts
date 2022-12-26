import { IUsersRepository } from "../ports/IUsersRepository";
import PostgresUsersRepository from "../repositories/postgres/PostgresUsersRepository";

export const getUsersRepository = (): IUsersRepository => {
    return new PostgresUsersRepository();
    // return new MongoDBUsersRepository();
};
