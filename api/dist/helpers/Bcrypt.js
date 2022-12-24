"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>Bcrypt
});
const _bcryptjs = /*#__PURE__*/ _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Bcrypt {
    static async hash(password) {
        return _bcryptjs.default.genSalt(12).then((salt)=>_bcryptjs.default.hash(password, salt)).then((hash)=>hash);
    }
    static async compare(password, hashPassword) {
        return _bcryptjs.default.compare(password, hashPassword).then((resp)=>resp);
    }
}
