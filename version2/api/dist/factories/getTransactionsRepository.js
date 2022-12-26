"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTransactionsRepository", {
    enumerable: true,
    get: ()=>getTransactionsRepository
});
const _postgresTransactionsRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresTransactionsRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getTransactionsRepository = ()=>{
    return new _postgresTransactionsRepository.default();
// return new MongoDBTransactionsRepository();
};
