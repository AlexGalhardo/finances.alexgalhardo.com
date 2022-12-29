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
const _decodeJwtToken = require("../../helpers/DecodeJwtToken");
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
    async register(req, res) {
        const { name , email , password  } = req.body;
        const response = await new _userRegisterUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute({
            name,
            email,
            password
        });
        return res.status(201).json(response);
    }
    async update(req, res) {
        const { name , email , password  } = req.body;
        const response = await new _userUpdateByIdUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute({
            id: (0, _decodeJwtToken.getDecodedJwtToken)(req).user_id,
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
            user_id: user?.id
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        return res.status(200).json({
            success: true,
            message: `${email} login successfully`,
            user_id: user?.id,
            jwt_token: jwtToken
        });
    }
    async logout(req, res) {
        const response = await new _userLogoutUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute((0, _decodeJwtToken.getDecodedJwtToken)(req).user_id);
        return res.status(response ? 200 : 400).json({
            success: true,
            message: `logout successfully`
        });
    }
    async deleteById(req, res) {
        const { user_id  } = req.params;
        const response = await new _userDeleteByIdUseCase.default((0, _getUsersRepository.getUsersRepository)()).execute(user_id);
        return res.status(response ? 200 : 400).json(response);
    }
}
const _default = new UserController();
