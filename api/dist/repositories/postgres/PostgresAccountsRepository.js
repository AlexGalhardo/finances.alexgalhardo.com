"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>PostgresBlogRepository
});
const _crypto = require("crypto");
const _slugify = /*#__PURE__*/ _interopRequireDefault(require("slugify"));
const _prisma = /*#__PURE__*/ _interopRequireDefault(require("../../config/prisma"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PostgresBlogRepository {
    async getAll() {
        const queryResponse = await _prisma.default.blogPost.findMany({});
        return queryResponse;
    }
    async getById(blogId) {
        const queryResponse = await _prisma.default.blogPost.findUnique({
            where: {
                id: blogId
            }
        });
        return queryResponse;
    }
    async create(blogObject) {
        const { title , resume , banner , category , body  } = blogObject;
        const queryResponse = await _prisma.default.blogPost.create({
            data: {
                id: (0, _crypto.randomUUID)(),
                title,
                resume,
                banner,
                category,
                body,
                slug: (0, _slugify.default)(title)
            }
        });
        return queryResponse;
    }
    async updateById(blogObject) {
        const { id , title , resume , banner , category , body  } = blogObject;
        const queryResponse = await _prisma.default.blogPost.update({
            where: {
                id
            },
            data: {
                title,
                resume,
                banner,
                category,
                body,
                slug: (0, _slugify.default)(title)
            }
        });
        return queryResponse;
    }
    async deleteById(blogId) {
        const queryResponse = await _prisma.default.blogPost.delete({
            where: {
                id: blogId
            }
        });
        return queryResponse;
    }
}
