"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _client = require("@prisma/client");
const prisma = new _client.PrismaClient({
    errorFormat: "pretty"
});
const _default = prisma;
