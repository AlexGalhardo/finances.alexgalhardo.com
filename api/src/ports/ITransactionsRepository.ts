import { Transaction } from "@prisma/client";

export interface ITransactionCreateUseCaseResponse {
    httpStatusCodeResponse: 201 | 400;
    response: {
        success: boolean;
        message: "Blog Post Created!" | "Blog Post NOT created";
        blogCreated?: Transaction;
    };
}

export interface ITransactionDeleteByIdUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
    };
}

export interface ITransactionGetAllUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
        allBlogPosts?: Transaction[];
    };
}

export interface ITransactionGetAllByCategoryUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
        blogPostFound?: Transaction;
    };
}

export interface ITransactionUpdateByIdUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
        blogUpdated?: Transaction;
    };
}

export interface ICreateTransactionParams {
    type: string;
    category: string;
    description: string;
    amount: number;
}

export interface IUpdateTransactionParams {
    id: string;
    type: string;
    category: string;
    description: string;
    amount: number;
}

export interface ITransactionsRepository {
    getAll(): Promise<Transaction[]>;

    getAllByCategory(transactionCategory: string): Promise<Transaction[]>;

    create(transactionObject: ICreateTransactionParams): Promise<Transaction>;

    updateById(transactionObject: IUpdateTransactionParams): Promise<Transaction>;

    deleteById(transactionId: string): Promise<Transaction>;
}
