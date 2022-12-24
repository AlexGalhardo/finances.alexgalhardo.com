"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _getUsersRepository = require("../../factories/getUsersRepository");
const _userDeleteByIdUseCase = /*#__PURE__*/ _interopRequireDefault(require("./UserDeleteByIdUseCase"));
const _userLoginUseCase = /*#__PURE__*/ _interopRequireDefault(require("./UserLoginUseCase"));
const _userLogoutUseCase = /*#__PURE__*/ _interopRequireDefault(require("./UserLogoutUseCase"));
const _userRegisterUseCase = /*#__PURE__*/ _interopRequireDefault(require("./UserRegisterUseCase"));
const _userUpdateByIdUseCase = /*#__PURE__*/ _interopRequireDefault(require("./UserUpdateByIdUseCase"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class UserController {
    getDecodedJwtToken(req) {
        const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
        return _jsonwebtoken.default.verify(JWT_TOKEN, process.env.JWT_SECRET);
    }
    async register(req, res) {
        const { name , email , password  } = req.body;
        const response = await new _userRegisterUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute({
            name,
            email,
            password
        });
        return res.status(response ? 200 : 400).json(response);
    }
    async update(req, res) {
        const { userId  } = this.getDecodedJwtToken(req);
        const { name , email , password  } = req.body;
        const response = await new _userUpdateByIdUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute({
            id: userId,
            name,
            email,
            password
        });
        return res.status(response ? 200 : 400).json(response);
    }
    async login(req, res) {
        const { email , password  } = req.body;
        const user = await new _userLoginUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute({
            email,
            password
        });
        const jwtToken = _jsonwebtoken.default.sign({
            userId: user.id
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        return res.status(user ? 200 : 404).json({
            success: true,
            message: `${email} login successfully`,
            jwt_token: jwtToken
        });
    }
    async logout(req, res) {
        const { httpStatusCodeResponse , response  } = await new _userLogoutUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute(this.getDecodedJwtToken(req).userId);
        return res.status(httpStatusCodeResponse).json(response);
    }
    async deleteById(req, res) {
        const { user_id  } = req.params;
        const { httpStatusCodeResponse , response  } = await new _userDeleteByIdUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute(user_id);
        return res.status(httpStatusCodeResponse).json(response);
    }
}
const _default = new UserController();
