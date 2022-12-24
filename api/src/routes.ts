import { Router } from "express";

import FinancesController from "./domain/finances/FinancesController";
import UserController from "./domain/user/UserController";
import { userIsAuthenticated } from "./middlewares/userIsAuthenticated";

export default Router()
    .post("/user/register", UserController.register)
    .post("/user/login", UserController.login)
    .post("/user/logout", userIsAuthenticated, UserController.logout)

    .put("/user/update/:userId", userIsAuthenticated, UserController.update)

    .get("/transaction/all", FinancesController.getAll)
    .get("/transaction/filter", FinancesController.getFinancesById)
    .post("/transaction/deposit", userIsAuthenticated, FinancesController.createFinances)
    .post("/transaction/expense", userIsAuthenticated, FinancesController.createFinances)
    .post("/transaction/investment", userIsAuthenticated, FinancesController.createFinances)
    .put("/transaction/update/:transaction_id", userIsAuthenticated, FinancesController.updateFinancesById)
    .delete("/transaction/delete/:transaction_id", userIsAuthenticated, FinancesController.deleteFinancesById);
