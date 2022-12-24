"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _getTransactionsRepository = require("../../factories/getTransactionsRepository");
const _createTransactionUseCase = /*#__PURE__*/ _interopRequireDefault(require("./CreateTransactionUseCase"));
const _deleteTransactionByIdUseCase = /*#__PURE__*/ _interopRequireDefault(require("./DeleteTransactionByIdUseCase"));
const _getAllTransactionsUseCase = /*#__PURE__*/ _interopRequireDefault(require("./GetAllTransactionsUseCase"));
const _getTransactionsByCategoryUseCase = /*#__PURE__*/ _interopRequireDefault(require("./GetTransactionsByCategoryUseCase"));
const _updateTransactionByIdUseCase = /*#__PURE__*/ _interopRequireDefault(require("./UpdateTransactionByIdUseCase"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TransactionsController {
    async getAllTransactions(req, res) {
        const allTransactions = await new _getAllTransactionsUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute();
        return res.status(allTransactions ? 200 : 404).json(allTransactions);
    }
    async getTransactionsByCategory(req, res) {
        const { category  } = req.body;
        const response = await new _getTransactionsByCategoryUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute(category);
        return res.status(response ? 200 : 400).json(response);
    }
    async createTransaction(req, res) {
        const { type , category , description , total  } = req.body;
        const response = await new _createTransactionUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute({
            type,
            category,
            description,
            total
        });
        return res.status(response ? 200 : 400).json(response);
    }
    async updateTransactionById(req, res) {
        const { transaction_id  } = req.params;
        const { type , category , description , total  } = req.body;
        const response = await new _updateTransactionByIdUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute({
            id: transaction_id,
            type,
            category,
            description,
            total
        });
        return res.status(response ? 200 : 400).json(response);
    }
    async deleteTransactionById(req, res) {
        const { transaction_id  } = req.params;
        const response = await new _deleteTransactionByIdUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute(transaction_id);
        return res.status(response ? 200 : 400).json(response);
    }
}
const _default = new TransactionsController();
