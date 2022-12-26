import { Request, Response } from "express";

import { getAccountsRepository } from "../../factories/getAccountsRepository";
import { getDecodedJwtToken } from "../../helpers/DecodeJwtToken";
// import { IGetDashboardDataResponse } from "../../ports/IAccountsRepository";
import GetDashboardDataUseCase from "./GetDashboardDataUseCase";

class AccountController {
    async getDashboardData(req: Request, res: Response) {
        const dashboardData = await new GetDashboardDataUseCase(getAccountsRepository()).execute(
            getDecodedJwtToken(req).userId,
        );

        return res.status(dashboardData ? 200 : 404).json({
            success: !!dashboardData,
            message: dashboardData ? "success" : "something went wrong",
            data: dashboardData,
        });
    }
}

export default new AccountController();
