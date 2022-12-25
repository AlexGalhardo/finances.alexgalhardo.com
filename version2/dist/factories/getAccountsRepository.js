"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAccountsRepository", {
    enumerable: true,
    get: ()=>getAccountsRepository
});
const _postgresAccountsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresAccountsRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getAccountsRepository = ()=>{
    return new _postgresAccountsRepository.default();
// return new MongoDBAccountsRepository();
};
