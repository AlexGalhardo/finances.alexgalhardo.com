/* eslint-disable no-nested-ternary */ /* eslint-disable prettier/prettier */ /* eslint-disable no-unused-expressions */ /* eslint-disable no-plusplus */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>PostgresTransactionsRepository
});
const _crypto = require("crypto");
const _prisma = /*#__PURE__*/ _interopRequireDefault(require("../../config/prisma"));
const _dateTime = /*#__PURE__*/ _interopRequireDefault(require("../../helpers/DateTime"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PostgresTransactionsRepository {
    updateById(transactionObject) {
        throw new Error("Method not implemented.");
    }
    deleteById(transactionId) {
        throw new Error("Method not implemented.");
    }
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
        const transactionsFiltered = [];
        for(let i = 0; i < queryResponse.length; i++){
            const created_at = queryResponse[i].created_at.slice(0, 10);
            const dateFormated = `${created_at[3]}${created_at[4]}/${created_at[0]}${created_at[1]}/${created_at[6]}${created_at[7]}${created_at[8]}${created_at[9]}`;
            const dateFormatedTimestamp = new Date(dateFormated).getTime();
            if (category === "ALL" ? true : queryResponse[i].category === category && dateFormatedTimestamp >= new Date(startDate).getTime() && dateFormatedTimestamp <= new Date(finalDate).getTime()) {
                transactionsFiltered.push(queryResponse[i]);
            }
        }
        return transactionsFiltered;
    }
    async create(transactionObject) {
        const { user_id , description , amount  } = transactionObject;
        let { type , category  } = transactionObject;
        type = type.toUpperCase();
        category = category.toUpperCase();
        const Account = await _prisma.default.account.findFirst({
            where: {
                user_id
            }
        });
        if (Account) {
            type === "DEPOSIT" ? Account.current_balance += amount : type === "EXPENSE" ? Account.total_expenses += amount : Account.investments_total += amount;
            if (category === 'FOOD') Account.total_food += amount;
            if (category === 'SUBSCRIPTION') Account.total_subscriptions += amount;
            if (category === 'SHOP') Account.total_shop += amount;
            if (category === 'ENTERTAINMENT') Account.total_entertainment += amount;
            if (category === 'TRANSPORT') Account.total_transport += amount;
            if (category === 'HOUSE') Account.total_house += amount;
            if (category === 'SERVICES') Account.total_services += amount;
            if (category === "FIXED_INCOME") Account.investments_fixed_income += amount;
            if (category === "VARIABLE_INCOME") Account.investments_variable_income += amount;
            if (category === "CRIPTOCURRENCIES") Account.investments_criptocurrencies += amount;
            await _prisma.default.account.update({
                where: {
                    id: Account.id
                },
                data: {
                    current_balance: Account.current_balance,
                    total_expenses: Account.total_expenses,
                    total_food: Account.total_food,
                    total_subscriptions: Account.total_subscriptions,
                    total_shop: Account.total_shop,
                    total_entertainment: Account.total_entertainment,
                    total_transport: Account.total_transport,
                    total_house: Account.total_house,
                    total_services: Account.total_services,
                    investments_total: Account.investments_total,
                    investments_fixed_income: Account.investments_fixed_income,
                    investments_variable_income: Account.investments_variable_income,
                    investments_criptocurrencies: Account.investments_criptocurrencies,
                    updated_at: _dateTime.default.getNow()
                }
            });
            const queryResponse = await _prisma.default.transaction.create({
                data: {
                    id: (0, _crypto.randomUUID)(),
                    user_id,
                    user_email: Account.user_email,
                    account_id: Account.id,
                    type,
                    category,
                    description,
                    amount,
                    created_at: _dateTime.default.getNow()
                }
            });
            return queryResponse;
        }
        return null;
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
    async deleteById(transactionId) {
        const queryResponse = await _prisma.default.transaction.delete({
            where: {
                id: transactionId
            }
        });
        return queryResponse;
    }
}
