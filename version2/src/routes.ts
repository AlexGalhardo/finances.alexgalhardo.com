import { Router } from "express";

import AccountController from "./domain/account/AccountController";
import TransactionsController from "./domain/transactions/TransactionsController";
import UserController from "./domain/user/UserController";
import { userIsAuthenticated } from "./middlewares/userIsAuthenticated";

export default Router()
    .post("/user/register", UserController.register)
    .post("/user/login", UserController.login)
    .post("/user/logout", userIsAuthenticated, UserController.logout)

    .put("/user/update/:user_id", userIsAuthenticated, UserController.update)

    .get("/transaction/all", userIsAuthenticated, TransactionsController.getAllTransactions)
    .get("/transaction/filter", userIsAuthenticated, TransactionsController.getTransactionsByCategory)
    .post("/transaction/create", userIsAuthenticated, TransactionsController.createTransaction)
    .put("/transaction/update/:transaction_id", userIsAuthenticated, TransactionsController.updateTransactionById)
    .delete("/transaction/delete/:transaction_id", userIsAuthenticated, TransactionsController.deleteTransactionById)

    .get("/account/dashboard", AccountController.getDashboardData);
