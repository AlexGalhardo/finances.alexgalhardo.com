"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getUsersRepository", {
    enumerable: true,
    get: ()=>getUsersRepository
});
const _postgresUsersRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresUsersRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getUsersRepository = ()=>{
    return new _postgresUsersRepository.default();
// return new MongoDBUsersRepository();
};
