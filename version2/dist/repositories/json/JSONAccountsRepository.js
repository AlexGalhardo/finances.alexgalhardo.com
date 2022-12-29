/* eslint-disable no-plusplus */ // import { Account } from "@prisma/client";
"use strict";
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
    async getDashboardData(user_id) /* : Promise<Account | null> */ {
        if (_accountsRepositoryJson.default) {
            for(let i = 0; i < _accountsRepositoryJson.default.length; i++){
                console.log("AccountsRepository index i => ", _accountsRepositoryJson.default[i], _accountsRepositoryJson.default[i].user_id === user_id);
                if (_accountsRepositoryJson.default[i].user_id === user_id) {
                    return _accountsRepositoryJson.default[i];
                }
            }
        }
        return null;
    }
}
