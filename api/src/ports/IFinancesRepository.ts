import { Transaction } from "@prisma/client";

export interface IBlogCreateUseCaseResponse {
    httpStatusCodeResponse: 201 | 400;
    response: {
        success: boolean;
        message: "Blog Post Created!" | "Blog Post NOT created";
        blogCreated?: Transaction;
    };
}

export interface IBlogDeleteByIdUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
    };
}

export interface IBlogGetAllUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
        allBlogPosts?: Transaction[];
    };
}

export interface IBlogGetByIdUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
        blogPostFound?: Transaction;
    };
}

export interface IBlogUpdateByIdUseCaseResponse {
    httpStatusCodeResponse: 200 | 404;
    response: {
        success: boolean;
        message: string;
        blogUpdated?: Transaction;
    };
}

export interface ICreateBlogParams {
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

export interface IBlogRepository {
    getAll(): Promise<Transaction[]>;

    getAllByCategory(transactionCategory: string): Promise<Transaction[]>;

    create(transactionObject: ICreateBlogParams): Promise<Transaction>;

    updateById(transactionObject: IUpdateTransactionParams): Promise<Transaction>;

    deleteById(transactionId: string): Promise<Transaction>;
}
