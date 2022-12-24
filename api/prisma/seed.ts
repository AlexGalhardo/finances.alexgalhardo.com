import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

import Bcrypt from "../src/helpers/Bcrypt";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.transaction.deleteMany({});

    const accountId = randomUUID();
    const userId = randomUUID();

    await prisma.user.createMany({
        data: [
            {
                id: userId,
                email: "alex@gmail.com",
                name: "alex",
                password: await Bcrypt.hash("teste123"),
                reset_password_token: null,
            },
        ],
        skipDuplicates: true,
    });

    await prisma.account.createMany({
        data: [
            {
                id: accountId,
                user_email: "alex@gmail.com",
                user_id: userId,
                current_balance: 1214610,
                total_expenses: 98380,
                total_food: 1900,
                total_subscriptions: 8490,
                total_shop: 20000,
                total_entertainment: 2990,
                total_transport: 10000,
                total_house: 55000,
                investments_total: 1700000,
                investments_fixed_income: 1000000,
                investments_variable_income: 500000,
                investments_criptocurrencies: 200000,
                account_json: JSON.stringify({
                    id: accountId,
                    user_email: "alex@gmail.com",
                    user_id: userId,
                    current_balance: 1214610,
                    total_expenses: 98380,
                    total_food: 1900,
                    total_subscriptions: 8490,
                    total_shop: 20000,
                    total_entertainment: 2990,
                    total_transport: 10000,
                    total_house: 55000,
                    investments_total: 1700000,
                    investments_fixed_income: 1000000,
                    investments_variable_income: 500000,
                    investments_criptocurrencies: 200000,
                }),
            },
        ],
        skipDuplicates: false,
    });

    await prisma.transaction.createMany({
        data: [
            {
                id: randomUUID(),
                user_id: userId,
                user_email: "alex@gmail.com",
                account_id: accountId,
                type: "EXPENSE",
                category: "FOOD",
                description: "Almoço MacDonalds",
                amount: 3990,
                transaction_json: JSON.stringify({
                    id: randomUUID(),
                    user_id: userId,
                    user_email: "alex@gmail.com",
                    account_id: accountId,
                    type: "EXPENSE",
                    category: "FOOD",
                    description: "Almoço MacDonalds",
                    amount: 3990,
                }),
            },
        ],
        skipDuplicates: true,
    });
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
