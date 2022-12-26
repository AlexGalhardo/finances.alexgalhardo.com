"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interopRequireDefault(require("./app"));
const _graphqlServer = /*#__PURE__*/ _interopRequireDefault(require("./graphql/GraphqlServer"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_graphqlServer.default.listen().then(({ url  })=>console.log(`GALHARDO FINANCES GraphqlServer running on => ${url}`));
_app.default.listen(process.env.PORT || 3333, ()=>console.log(`GALHARDO FINANCES HTTP REST API server is running at ${process.env.API_URL}${process.env.PORT ?? 3333}`));
