"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "userIsAuthenticated", {
    enumerable: true,
    get: ()=>userIsAuthenticated
});
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _postgresUsersRepository = /*#__PURE__*/ _interopRequireDefault(require("../repositories/postgres/PostgresUsersRepository"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const userIsAuthenticated = async (req, res, next)=>{
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer") || !req.headers.authorization.split(" ")[1]) {
        return res.status(422).json({
            success: false,
            message: "Please provide the User JWT Token in Header Authorization Bearer Token"
        });
    }
    try {
        const JWT_TOKEN = req.headers.authorization.split(" ")[1];
        const decoded = _jsonwebtoken.default.verify(JWT_TOKEN, process.env.JWT_SECRET);
        const userExists = await new _postgresUsersRepository.default().userExists(decoded.userId);
        if (!userExists) {
            return res.status(422).json({
                success: false,
                message: "User jwt token inválid"
            });
        }
        return next();
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: error
        });
    }
};
