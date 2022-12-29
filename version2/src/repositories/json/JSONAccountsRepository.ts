/* eslint-disable no-plusplus */
import { Account } from "@prisma/client";

import { IAccountsRepository } from "../../ports/IAccountsRepository";
import AccountsRepository from "./AccountsRepository.json";

export default class JSONAccountsRepository implements IAccountsRepository {
    async getDashboardData(user_id: string): Promise<Account | null> {
        if (AccountsRepository) {
            return AccountsRepository.find((account: Account) => {
                return account.user_id === user_id;
            });
        }
        return null;
    }
}
