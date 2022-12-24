"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>PostgresTransactionsRepository
});
const _crypto = require("crypto");
const _prisma = /*#__PURE__*/ _interopRequireDefault(require("../../config/prisma"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PostgresTransactionsRepository {
    async getAll() {
        const queryResponse = await _prisma.default.transaction.findMany({});
        return queryResponse;
    }
    async getById(blogId) {
        const queryResponse = await _prisma.default.transaction.findUnique({
            where: {
                id: blogId
            }
        });
        return queryResponse;
    }
    async create(transactionObject) {
        const { type , category , description , amount  } = transactionObject;
        const queryResponse = await _prisma.default.transaction.create({
            data: {
                id: (0, _crypto.randomUUID)(),
                type,
                category,
                description,
                amount
            }
        });
        return queryResponse;
    }
    async updateById(transactionObject) {
        const { id , type , category , description , amount  } = transactionObject;
        const queryResponse = await _prisma.default.transaction.update({
            where: {
                id
            },
            data: {
                type,
                category,
                description,
                amount
            }
        });
        return queryResponse;
    }
    async deleteById(blogId) {
        const queryResponse = await _prisma.default.transaction.delete({
            where: {
                id: blogId
            }
        });
        return queryResponse;
    }
}
