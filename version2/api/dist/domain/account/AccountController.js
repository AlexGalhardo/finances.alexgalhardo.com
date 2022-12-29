"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _getAccountsRepository = require("../../factories/getAccountsRepository");
const _getDashboardDataUseCase = /*#__PURE__*/ _interopRequireDefault(require("./GetDashboardDataUseCase"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AccountController {
    async getDashboardData(req, res) {
        const dashboardData = await new _getDashboardDataUseCase.default((0, _getAccountsRepository.getAccountsRepository)()).execute(// getDecodedJwtToken(req).user_id,
        "54e526ea-4c31-48d2-85ef-91e369be2343");
        console.log("dashboardData => ", dashboardData);
        return res.status(dashboardData ? 200 : 404).json({
            success: !!dashboardData,
            message: dashboardData ? "success" : "something went wrong",
            data: dashboardData
        });
    }
}
const _default = new AccountController();
