import { Request, Response } from "express";

import { getAccountsRepository } from "../../factories/getAccountsRepository";
import { getDecodedJwtToken } from "../../helpers/DecodeJwtToken";
// import { IGetDashboardDataResponse } from "../../ports/IAccountsRepository";
import GetDashboardDataUseCase from "./GetDashboardDataUseCase";

class AccountController {
    async getDashboardData(req: Request, res: Response) {
        const dashboardData = await new GetDashboardDataUseCase(getAccountsRepository()).execute(
            // getDecodedJwtToken(req).user_id,
            "54e526ea-4c31-48d2-85ef-91e369be2343",
        );

        console.log("dashboardData => ", dashboardData);

        return res.status(dashboardData ? 200 : 404).json({
            success: !!dashboardData,
            data: dashboardData,
        });
    }
}

export default new AccountController();
