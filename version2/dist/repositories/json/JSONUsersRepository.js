"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>JSONUsersRepository
});
const _crypto = require("crypto");
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _prisma = /*#__PURE__*/ _interopRequireDefault(require("../../config/prisma"));
const _bcrypt = /*#__PURE__*/ _interopRequireDefault(require("../../helpers/Bcrypt"));
const _accountsRepositoryJson = /*#__PURE__*/ _interopRequireDefault(require("./AccountsRepository.json"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JSONUsersRepository {
    async register(registerUserObject) {
        const { email , name , password  } = registerUserObject;
        const newuser_id = (0, _crypto.randomUUID)();
        const jwtToken = _jsonwebtoken.default.sign({
            user_id: newuser_id
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        const queryResponse = await _prisma.default.user.create({
            data: {
                id: newuser_id,
                name,
                email,
                password: await _bcrypt.default.hash(password),
                jwt_token: jwtToken
            }
        });
        return {
            userRegistred: queryResponse,
            jwtToken
        };
    }
    async updateById(updateUserParamsObject) {
        const { name , email , password  } = updateUserParamsObject;
        const queryResponse = await _prisma.default.user.update({
            where: {
                id: updateUserParamsObject.id
            },
            data: {
                name,
                email,
                password: await _bcrypt.default.hash(password)
            }
        });
        return queryResponse;
    }
    async login(email, password) {
        if (_accountsRepositoryJson.default) {
            for(let i = 0; i < _accountsRepositoryJson.default.length; i++){
                if (_accountsRepositoryJson.default[i].user_email === email) {
                    const passwordIsValid = await _bcrypt.default.compare(password, _accountsRepositoryJson.default[i].password);
                    if (passwordIsValid) _accountsRepositoryJson.default[i];
                }
            }
        }
        return null;
    }
    async userExists(user_id) {
        try {
            const userExists = await _prisma.default.user.findUnique({
                where: {
                    id: user_id
                }
            });
            if (userExists) return true;
            return false;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getAll() {
        return _prisma.default.user.findMany({});
    }
    async getById(user_id) {
        const queryResponse = await _prisma.default.user.findUnique({
            where: {
                id: user_id
            }
        });
        return queryResponse;
    }
    async deleteAll() {
        await _prisma.default.user.deleteMany({});
        return true;
    }
    async deleteById(user_id) {
        const queryResponse = await _prisma.default.user.delete({
            where: {
                id: user_id
            }
        });
        if (queryResponse) return true;
        return false;
    }
    async logout(user_id) {
        const queryResponse = await _prisma.default.user.update({
            where: {
                id: user_id
            },
            data: {
                jwt_token: null
            }
        });
        if (queryResponse) return true;
        return false;
    }
}
