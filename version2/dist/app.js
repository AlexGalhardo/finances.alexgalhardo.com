"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _compression = /*#__PURE__*/ _interopRequireDefault(require("compression"));
const _cors = /*#__PURE__*/ _interopRequireDefault(require("cors"));
require("dotenv/config");
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _helmet = /*#__PURE__*/ _interopRequireDefault(require("helmet"));
require("express-async-errors");
const _routes = /*#__PURE__*/ _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.use(_express.default.json()).use((0, _cors.default)()).use((0, _compression.default)()).use((0, _helmet.default)()).use("/api", _routes.default).use((error, request, response, next)=>{
    if (error instanceof Error) {
        return response.status(400).json({
            message: error.message
        });
    }
    response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
    return next();
}).get("/", (req, res)=>{
    return res.status(200).json({
        status: "GALHARDO FINANCES HTTP REST API is working"
    });
});
const _default = app;
