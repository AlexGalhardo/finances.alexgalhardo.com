/* eslint-disable indent */ /* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getUsersRepository", {
    enumerable: true,
    get: ()=>getUsersRepository
});
const _jsonusersRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/json/JSONUsersRepository"));
const _mongoDBUsersRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/mongodb/MongoDBUsersRepository"));
const _postgresUsersRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresUsersRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getUsersRepository = ()=>{
    return process.env.DATABASE_TO_USE === "postgres" ? new _postgresUsersRepository.default() : process.env.DATABASE_TO_USE === "mongodb" ? new _mongoDBUsersRepository.default() : new _jsonusersRepository.default();
};
