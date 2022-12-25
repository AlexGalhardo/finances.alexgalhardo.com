import request from "supertest";
import { describe, it, expect } from "vitest";

import { testAccountId, testUserEmail, testUserPassword } from "../../../prisma/seed";
import app from "../../../src/app";
import { HttpStatusCodeEnum } from "../../../src/helpers/Interfaces";
import PostgresTransactionsRepository from "../../../src/repositories/postgres/PostgresTransactionsRepository";

describe("testing get all users", () => {
    it("it should return http status code 200 with all users entity json array response", async () => {
        const userTestLoginResponse = await request(app)
            .post("/api/user/login")
            .send({
                email: testUserEmail,
                password: testUserPassword,
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        const response = await request(app)
            .get("/api/transaction/all")
            .set("Authorization", `Bearer ${userTestLoginResponse.body.jwt_token}`);

        const expected_response = await new PostgresTransactionsRepository().getAll(testAccountId);

        expect(response.statusCode).toBe(HttpStatusCodeEnum.OK);
        expect(response.body).toMatchObject(expected_response);
    });
});
