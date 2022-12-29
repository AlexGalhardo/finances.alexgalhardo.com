import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

import Bcrypt from "../src/helpers/Bcrypt";
import DateTime from "../src/helpers/DateTime";
import { TransactionTypeEnum, TransactionCategoryEnum } from "../src/helpers/Interfaces";

const prisma = new PrismaClient();

export const testAccountId = randomUUID();
export const testuser_id = randomUUID();
export const testUserEmail = "test@gmail.com";
export const testUserPassword = "test123";

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.transaction.deleteMany({});

    await prisma.user.createMany({
        data: [
            {
                id: testuser_id,
                email: testUserEmail,
                name: "test",
                password: await Bcrypt.hash(testUserPassword),
                reset_password_token: null,
                created_at: DateTime.getNow(),
            },
        ],
        skipDuplicates: true,
    });

    await prisma.account.createMany({
        data: [
            {
                account_id: testAccountId,
                user_email: testUserEmail,
                user_id: testuser_id,
                current_balance: 348990,
                total_expenses: 201010,
                total_food: 11880,
                total_subscriptions: 5490,
                total_shop: 29990,
                total_entertainment: 67980,
                total_transport: 10000,
                total_house: 15670,
                total_services: 60000,
                investments_total: 1450000,
                investments_fixed_income: 1000000,
                investments_variable_income: 350000,
                investments_criptocurrencies: 100000,
                created_at: DateTime.getNow(),
            },
        ],
        skipDuplicates: false,
    });

    await prisma.transaction.createMany({
        data: [
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.DEPOSIT,
                category: TransactionCategoryEnum.WAGE,
                description: "Salario Google",
                amount: 2000000,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FOOD,
                description: "Almoço Macdonalds",
                amount: 3990,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FOOD,
                description: "Marmitex Média",
                amount: 1900,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FOOD,
                description: "Pizza Dominós Janta",
                amount: 5990,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.SUBSCRIPTIONS,
                description: "Netflix Premium",
                amount: 5490,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.SHOP,
                description: "Tenis Adidas",
                amount: 29990,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.ENTERTAINMENT,
                description: "God Of War Ragnarok PS5",
                amount: 34990,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.ENTERTAINMENT,
                description: "Call Of Duty Modern Warfare 2 PS5",
                amount: 32990,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.TRANSPORT,
                description: "Gasolina Carro",
                amount: 10000,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.HOUSE,
                description: "Produtos de Limpeza",
                amount: 15670,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.SERVICES,
                description: "Tatuagem Nova",
                amount: 60000,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.FIXED_INCOME,
                description: "Tesouro Selic Prefixado 2023",
                amount: 1000000,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
                type: TransactionTypeEnum.EXPENSE,
                category: TransactionCategoryEnum.VARIABLE_INCOME,
                description: "Ações Tesla",
                amount: 350000,
                created_at: DateTime.getNow(),
            },
            {
                transaction_id: randomUUID(),
                user_id: testuser_id,
                user_email: testUserEmail,
                account_id: testAccountId,
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
