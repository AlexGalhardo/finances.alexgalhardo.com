import { IUsersRepository } from "../ports/IUsersRepository";
import InMemoryUsersRepository from "../repositories/postgres/PostgresUsersRepository";

export const makeUsersRepository = (): IUsersRepository => {
    return new InMemoryUsersRepository();
};
