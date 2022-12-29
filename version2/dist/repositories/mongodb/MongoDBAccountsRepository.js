/* eslint-disable no-plusplus */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>MongoDBAccountsRepository
});
const _prisma = /*#__PURE__*/ _interopRequireDefault(require("../../config/prisma"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MongoDBAccountsRepository {
    async getDashboardData(user_id) {
        const Account = await _prisma.default.account.findFirst({
            where: {
                user_id
            }
        });
        return Account;
    }
}
