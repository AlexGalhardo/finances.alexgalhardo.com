import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

import Bcrypt from "../src/helpers/Bcrypt";
import DateTime from "../src/helpers/DateTime";
import { TransactionTypeEnum, TransactionCategoryEnum } from "../src/helpers/Interfaces";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.transaction.deleteMany({});

    const accountId = randomUUID();
    const userId = randomUUID();
    const userEmail = "testing@gmail.com";

    await prisma.user.createMany({
        data: [
            {
                id: userId,
                email: userEmail,
                name: "testing",
                password: await Bcrypt.hash("teste123"),
                reset_password_token: null,
                created_at: DateTime.getNow(),
            },
        ],
        skipDuplicates: true,
    });

    await prisma.account.createMany({
        data: [
            {
                id: accountId,
                user_email: userEmail,
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
                created_at: DateTime.getNow(),
            },
        ],
        skipDuplicates: false,
    });

    await prisma.transaction.createMany({
        data: [
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.DEPOSIT,
                category: TransactionCategoryEnum.WAGE,
                description: "Salario Google",
                amount: 2000000,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FOOD,
                description: "Almoço Macdonalds",
                amount: 3990,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FOOD,
                description: "Marmitex Média",
                amount: 1900,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FOOD,
                description: "Pizza Dominós Janta",
                amount: 5990,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.SUBSCRIPTIONS,
                description: "Netflix Premium",
                amount: 5490,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.SHOP,
                description: "Tenis Adidas",
                amount: 29990,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.ENTERTAINMENT,
                description: "God Of War Ragnarok PS5",
                amount: 34990,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.ENTERTAINMENT,
                description: "Call Of Duty Modern Warfare 2 PS5",
                amount: 32990,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.TRANSPORT,
                description: "Gasolina Carro",
                amount: 29990,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.HOUSE,
                description: "Produtos de Limpeza",
                amount: 15670,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.SERVICES,
                description: "Tatuagem Nova",
                amount: 60000,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FIXED_INCOME,
                description: "Tesouro Selic Prefixado 2023",
                amount: 1000000,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.VARIABLE_INCOME,
                description: "Ações Tesla",
                amount: 350000,
                created_at: DateTime.getNow(),
            },
            {
                id: randomUUID(),
                user_id: userId,
                user_email: userEmail,
                account_id: accountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.CRIPTOCURRENCIES,
                description: "Bitcoin Binance",
                amount: 100000,
                created_at: DateTime.getNow(),
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
