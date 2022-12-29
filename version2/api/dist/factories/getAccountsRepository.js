/* eslint-disable indent */ /* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAccountsRepository", {
    enumerable: true,
    get: ()=>getAccountsRepository
});
const _jsonaccountsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/json/JSONAccountsRepository"));
const _mongoDBAccountsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/mongodb/MongoDBAccountsRepository"));
const _postgresAccountsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresAccountsRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getAccountsRepository = ()=>{
    return process.env.DATABASE_TO_USE === "postgres" ? new _postgresAccountsRepository.default() : process.env.DATABASE_TO_USE === "mongodb" ? new _mongoDBAccountsRepository.default() : new _jsonaccountsRepository.default();
};
