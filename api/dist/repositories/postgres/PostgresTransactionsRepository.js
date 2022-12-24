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
    async getAll(user_id) {
        const queryResponse = await _prisma.default.transaction.findMany({
            where: {
                user_id
            }
        });
        return queryResponse;
    }
    async getAllByCategory(user_id, category, startDate, finalDate) {
        const queryResponse = await _prisma.default.transaction.findMany({
            where: {
                category,
                user_id
            }
        });
        // todo
        // get only transactions in date interval
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
