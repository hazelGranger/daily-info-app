"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expense = _interopRequireDefault(require("../models/expense"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function create(_x) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ctx) {
    var newExpense, saveExpense;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newExpense = new _expense.default(ctx.request.body);
            _context.next = 3;
            return newExpense.save();

          case 3:
            saveExpense = _context.sent;
            ctx.body = saveExpense;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _create.apply(this, arguments);
}

function findAll(_x2) {
  return _findAll.apply(this, arguments);
}

function _findAll() {
  _findAll = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(ctx) {
    var expenseItems;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _expense.default.find({});

          case 2:
            expenseItems = _context2.sent;
            ctx.body = expenseItems;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _findAll.apply(this, arguments);
}

function deleteSelected(_x3) {
  return _deleteSelected.apply(this, arguments);
}

function _deleteSelected() {
  _deleteSelected = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(ctx) {
    var selectedItems;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _expense.default.remove({
              _id: {
                $in: ctx.request.body
              }
            });

          case 2:
            selectedItems = _context3.sent;
            ctx.body = selectedItems;

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _deleteSelected.apply(this, arguments);
}

var _default = {
  create: create,
  findAll: findAll,
  deleteSelected: deleteSelected
};
exports.default = _default;
//# sourceMappingURL=expense.js.map