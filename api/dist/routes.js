"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _transactionsController = /*#__PURE__*/ _interopRequireDefault(require("./domain/transactions/TransactionsController"));
const _userController = /*#__PURE__*/ _interopRequireDefault(require("./domain/user/UserController"));
const _userIsAuthenticated = require("./middlewares/userIsAuthenticated");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _express.Router)().post("/user/register", _userController.default.register).post("/user/login", _userController.default.login).post("/user/logout", _userIsAuthenticated.userIsAuthenticated, _userController.default.logout).put("/user/update/:userId", _userIsAuthenticated.userIsAuthenticated, _userController.default.update).get("/transaction/all", _transactionsController.default.getAllTransactions).get("/transaction/filter", _transactionsController.default.getTransactionsByCategory).post("/transaction/create", _userIsAuthenticated.userIsAuthenticated, _transactionsController.default.createTransaction).put("/transaction/update/:transaction_id", _userIsAuthenticated.userIsAuthenticated, _transactionsController.default.updateTransactionById).delete("/transaction/delete/:transaction_id", _userIsAuthenticated.userIsAuthenticated, _transactionsController.default.deleteTransactionById);
