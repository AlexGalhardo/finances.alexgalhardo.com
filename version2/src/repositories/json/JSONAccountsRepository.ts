/* eslint-disable no-plusplus */
// import { Account } from "@prisma/client";

import { IAccountsRepository } from "../../ports/IAccountsRepository";
import AccountsRepository from "./AccountsRepository.json";

export default class JSONAccountsRepository implements IAccountsRepository {
    async getDashboardData(user_id: string) /* : Promise<Account | null> */ {
        if (AccountsRepository) {
            for (let i = 0; i < AccountsRepository.length; i++) {
                console.log(
                    "AccountsRepository index i => ",
                    AccountsRepository[i],
                    AccountsRepository[i].user_id === user_id,
                );
                if (AccountsRepository[i].user_id === user_id) {
                    return AccountsRepository[i];
                }
            }
        }
        return null;
    }
}
