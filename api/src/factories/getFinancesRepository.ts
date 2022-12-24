import { IFinancesRepository } from "../ports/IFinancesRepository";
import PostgresFinancesRepository from "../repositories/postgres/PostgresFinancesRepository";

export const makeBlogRepository = (): IFinancesRepository => {
    return new PostgresFinancesRepository();
    // return new MongoDBFinancesRepository();
};
