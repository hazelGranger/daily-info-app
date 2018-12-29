"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _expense = _interopRequireDefault(require("./expense"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(router) {
  router.use('/expense', _expense.default);
};

exports.routes = routes;
//# sourceMappingURL=index.js.map