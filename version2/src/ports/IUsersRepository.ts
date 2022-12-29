import { User } from "@prisma/client";

type UserEntity = {
    id: string;
    email: string;
    name: string;
    jwt_token: string | null;
    password: string;
    reset_password_token?: string | null;
    created_at: Date | string | null;
    updated_at?: Date | string | null;
};

export type typeUserRegisterMethodResponse = {
    httpStatusCodeResponse: 201 | 400;
    response: {
        message: string;
        jwt_token?: string;
        user_created?: UserEntity;
    };
};

export type typeUserLoginMethodResponse = {
    httpStatusCodeResponse: 200 | 400;
    response: {
        message: string;
        jwt_token?: string;
    };
};

export type typeUserLogoutMethodResponse = {
    httpStatusCodeResponse: 200 | 404;
    response: {
        status?: string;
        error?: string;
    };
};

export type typeUserGetAllMethodResponse = {
    httpStatusCodeResponse: 200;
    response: UserEntity[];
};

export type typeUserDeleteAllMethodResponse = {
    httpStatusCodeResponse: 200;
    response: UserEntity[];
};

export type typeUserDeleteByIdMethodResponse = {
    httpStatusCodeResponse: 200 | 404;
    response: {
        status?: string;
        error?: string;
    };
};

export type registerUserParams = {
    name: string;
    email: string;
    password: string;
};

export interface IUpdateUserParams {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type typeUserGetByIdMethodResponse = {
    httpStatusCodeResponse: 200 | 404;
    response: UserEntity | string;
};

export type typeUserUpdateMethodResponse = {
    httpStatusCodeResponse: 200 | 404;
    response: {
        status?: string;
        error?: string;
        user_updated?: UserEntity;
    };
};

export type typeUserAddItemToShopCartMethodResponse = {
    httpStatusCodeResponse: 201 | 400 | 404;
    response: {
        status?: string;
        error?: string;
        user?: string;
    };
};

export interface IUsersRepository {
    register(registerUserObject: registerUserParams): Promise<{ userRegistred: User; jwtToken: string } | null>;
    updateById(updateUserParamsObject: IUpdateUserParams): Promise<User | null>;
    login(email: string, password: string): Promise<User | null>;
    userExists(user_id: string): Promise<boolean>;
    logout(user_id: string): Promise<boolean>;
    deleteById(user_id: string): Promise<boolean>;
}
