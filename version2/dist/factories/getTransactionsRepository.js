/* eslint-disable indent */ /* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTransactionsRepository", {
    enumerable: true,
    get: ()=>getTransactionsRepository
});
const _jsontransactionsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/json/JSONTransactionsRepository"));
const _mongoDBTransactionsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/mongodb/MongoDBTransactionsRepository"));
const _postgresTransactionsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresTransactionsRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getTransactionsRepository = ()=>{
    return process.env.DATABASE_TO_USE === "postgres" ? new _postgresTransactionsRepository.default() : process.env.DATABASE_TO_USE === "mongodb" ? new _mongoDBTransactionsRepository.default() : new _jsontransactionsRepository.default();
};
