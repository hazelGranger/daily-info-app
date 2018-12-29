"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpenseSchema = new _mongoose.default.Schema({
  item: {
    type: String
  },
  price: {
    type: Number
  },
  type: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Expense = _mongoose.default.model('Expense', ExpenseSchema);

var _default = _mongoose.default.model('Expense');

exports.default = _default;
//# sourceMappingURL=expense.js.map