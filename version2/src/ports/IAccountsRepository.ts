import { Account } from "@prisma/client";

export interface IGetDashboardDataResponse {
    success: boolean;
    message: string;
    data?: Account;
}

export interface IAccountsRepository {
    getDashboardData(user_id: string) /*: Promise<Account | null> */;
}
