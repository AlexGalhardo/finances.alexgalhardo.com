"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDecodedJwtToken", {
    enumerable: true,
    get: ()=>getDecodedJwtToken
});
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getDecodedJwtToken(req) {
    const JWT_TOKEN = req.headers.authorization?.split(" ")[1];
    return _jsonwebtoken.default.verify(JWT_TOKEN, process.env.JWT_SECRET);
}
