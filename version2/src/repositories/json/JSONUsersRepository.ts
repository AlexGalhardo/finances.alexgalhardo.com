import { User } from "@prisma/client";
import { randomUUID } from "crypto";
import fs from "fs";
import jwt from "jsonwebtoken";

import prisma from "../../config/prisma";
import Bcrypt from "../../helpers/Bcrypt";
import { IUpdateUserParams, IUsersRepository, registerUserParams } from "../../ports/IUsersRepository";

// const AccountsRepository = JSON.parse(fs.readFileSync('./AccountsRepository.json', 'utf-8'));
import AccountsRepository from "./AccountsRepository.json";

export default class JSONUsersRepository implements IUsersRepository {
    async register(registerUserObject: registerUserParams): Promise<{ userRegistred: User; jwtToken: string } | null> {
        const { email, name, password } = registerUserObject;

        const newuser_id = randomUUID();

        const jwtToken = jwt.sign({ user_id: newuser_id }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        });

        const queryResponse = await prisma.user.create({
            data: {
                id: newuser_id,
                name,
                email,
                password: await Bcrypt.hash(password),
                jwt_token: jwtToken,
            },
        });

        return {
            userRegistred: queryResponse,
            jwtToken,
        };
    }

    async updateById(updateUserParamsObject: IUpdateUserParams): Promise<User> {
        const { name, email, password } = updateUserParamsObject;

        const queryResponse = await prisma.user.update({
            where: {
                id: updateUserParamsObject.id,
            },
            data: {
                name,
                email,
                password: await Bcrypt.hash(password),
            },
        });

        return queryResponse;
    }

    async login(email: string, password: string): Promise<User | null> {
        if (AccountsRepository) {
            for (let i = 0; i < AccountsRepository.length; i++) {
                if (AccountsRepository[i].user_email === email) {
                    const passwordIsValid = await Bcrypt.compare(password, AccountsRepository[i].password);

                    if (passwordIsValid) AccountsRepository[i];
                }
            }
        }
        return null;
    }

    async userExists(user_id: string): Promise<boolean> {
        try {
            const userExists = await prisma.user.findUnique({
                where: {
                    id: user_id,
                },
            });

            if (userExists) return true;

            return false;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async getAll(): Promise<User[] | null> {
        return prisma.user.findMany({});
    }

    async getById(user_id: string): Promise<User | null> {
        const queryResponse = await prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });

        return queryResponse;
    }

    async deleteAll(): Promise<boolean> {
        await prisma.user.deleteMany({});
        return true;
    }

    async deleteById(user_id: string): Promise<boolean> {
        const queryResponse = await prisma.user.delete({
            where: {
                id: user_id,
            },
        });

        if (queryResponse) return true;

        return false;
    }

    async logout(user_id: string): Promise<boolean> {
        const queryResponse = await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                jwt_token: null,
            },
        });

        if (queryResponse) return true;

        return false;
    }
}
