"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _expense = _interopRequireDefault(require("../controllers/expense"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter.default();
router.get('/', _expense.default.findAll);
router.post('/', _expense.default.create);
router.post('/delete_selected', _expense.default.deleteSelected);

var _default = router.routes();

exports.default = _default;
//# sourceMappingURL=expense.js.map