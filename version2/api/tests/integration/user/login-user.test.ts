import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../../../src/app";
import { HttpStatusCodeEnum } from "../../../src/helpers/Interfaces";

describe("testing login user", () => {
    it("it should return http status code 200 with correct json response along with user jwt_token", async () => {
        const response = await request(app)
            .post("/api/user/login")
            .send({
                email: "test@gmail.com",
                password: "test123",
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        expect(response.statusCode).toBe(HttpStatusCodeEnum.OK);
        expect(response.body.message).toBe("test@gmail.com login successfully");
        expect(response.body.jwt_token).toBeDefined();
    });
});
