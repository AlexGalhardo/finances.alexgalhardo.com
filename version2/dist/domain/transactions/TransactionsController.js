"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _getTransactionsRepository = require("../../factories/getTransactionsRepository");
const _decodeJwtToken = require("../../helpers/DecodeJwtToken");
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
        const allTransactions = await new _getAllTransactionsUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute((0, _decodeJwtToken.getDecodedJwtToken)(req).user_id);
        return res.status(allTransactions ? 200 : 404).json(allTransactions);
    }
    async getTransactionsByCategory(req, res) {
        const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
        const jwtPayload = _jsonwebtoken.default.verify(JWT_TOKEN, process.env.JWT_SECRET);
        const { category , startDate , finalDate  } = req.body;
        const response = await new _getTransactionsByCategoryUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute(jwtPayload.user_id, category, startDate, finalDate);
        return res.status(response ? 200 : 400).json(response);
    }
    async createTransaction(req, res) {
        const { type , category , description , amount  } = req.body;
        const response = await new _createTransactionUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute({
            user_id: (0, _decodeJwtToken.getDecodedJwtToken)(req).user_id,
            type,
            category,
            description,
            amount
        });
        return res.status(response ? 200 : 400).json(response);
    }
    async updateTransactionById(req, res) {
        const { transaction_id  } = req.params;
        const { type , category , description , amount  } = req.body;
        const response = await new _updateTransactionByIdUseCase.default((0, _getTransactionsRepository.getTransactionsRepository)()).execute({
            id: transaction_id,
            type,
            category,
            description,
            amount
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
