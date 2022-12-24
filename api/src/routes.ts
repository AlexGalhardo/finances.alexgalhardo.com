import { Router } from "express";

import TransactionsController from "./domain/transactions/TransactionsController";
import UserController from "./domain/user/UserController";
import { userIsAuthenticated } from "./middlewares/userIsAuthenticated";

export default Router()
    .post("/user/register", UserController.register)
    .post("/user/login", UserController.login)
    .post("/user/logout", userIsAuthenticated, UserController.logout)

    .put("/user/update/:userId", userIsAuthenticated, UserController.update)

    .get("/transaction/all", TransactionsController.getAllTransactions)
    .get("/transaction/filter", TransactionsController.getTransactionsByCategory)
    .post("/transaction/create", userIsAuthenticated, TransactionsController.createTransaction)
    .put("/transaction/update/:transaction_id", userIsAuthenticated, TransactionsController.updateTransactionById)
    .delete("/transaction/delete/:transaction_id", userIsAuthenticated, TransactionsController.deleteTransactionById);
