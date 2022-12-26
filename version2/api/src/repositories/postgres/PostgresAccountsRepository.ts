/* eslint-disable no-plusplus */
import { Account } from "@prisma/client";

import prisma from "../../config/prisma";
import { IAccountsRepository } from "../../ports/IAccountsRepository";

export default class PostgresAccountsRepository implements IAccountsRepository {
    async getDashboardData(user_id: string): Promise<Account> {
        const Account = await prisma.account.findFirst({
            where: {
                user_id,
            },
        });

        return Account as Account;
    }
}
