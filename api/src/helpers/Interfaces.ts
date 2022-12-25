export enum TransactionTypeEnum {
    DEPOSIT = "DEPOSIT",
    EXPENSE = "EXPENSE",
    INVESTMENT = "INVESTMENT",
}

export enum TransactionCategoryEnum {
    WAGE = "WAGE",
    FREELANCER = "FREELANCER",
    INVESTMENT_PROFIT = "INVESTMENT_PROFIT",
    FOOD = "FOOD",
    SUBSCRIPTIONS = "SUBSCRIPTIONS",
    SHOP = "SHOP",
    ENTERTAINMENT = "ENTERTAINMENT",
    TRANSPORT = "TRANSPORT",
    HOUSE = "HOUSE",
    SERVICES = "SERVICES",
    FIXED_INCOME = "FIXED_INCOME",
    VARIABLE_INCOME = "VARIABLE_INCOME",
    CRIPTOCURRENCIES = "CRIPTOCURRENCIES",
    OTHERS = "OTHERS",
}

export interface ITransaction {
    id: string;
    account_id: string;
    user_id: string;
    user_email: string;
    type: TransactionTypeEnum;
    category: TransactionCategoryEnum;
    description: string;
    amount: number;
    created_at: string;
    updated_at?: string | null;
}

export enum HttpStatusCodeEnum {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_AUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}
