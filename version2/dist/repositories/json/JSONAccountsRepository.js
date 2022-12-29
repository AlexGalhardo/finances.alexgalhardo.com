/* eslint-disable no-plusplus */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>JSONAccountsRepository
});
const _accountsRepositoryJson = /*#__PURE__*/ _interopRequireDefault(require("./AccountsRepository.json"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JSONAccountsRepository {
    async getDashboardData(user_id) {
        if (_accountsRepositoryJson.default) {
            return _accountsRepositoryJson.default.find((account)=>{
                return account.user_id === user_id;
            });
        }
        return null;
    }
}
