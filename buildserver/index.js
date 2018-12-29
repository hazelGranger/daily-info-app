"use strict";

require("@babel/polyfill");

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaHelmet = _interopRequireDefault(require("koa-helmet"));

var _koaRespond = _interopRequireDefault(require("koa-respond"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = require("./routes");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa.default();
var router = new _koaRouter.default();
app.use((0, _koaHelmet.default)());
app.use((0, _koaLogger.default)());
app.use((0, _koaBodyparser.default)({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function onerror(err, ctx) {
    ctx.throw('body parse error');
  }
}));
(0, _routes.routes)(router); // app.use('/', async (ctx, next) => {
//   ctx.response.type = 'html'
//   ctx.response.body = await fs.readFile('../build/index.html', 'utf8')
// })

app.use(router.routes());
app.use(router.allowedMethods());
app.use((0, _koaStatic.default)('./build')); // const main = ctx => {
//   ctx.response.body = 'Hello World'
// }

var port = 9093;
var db_url = 'mongodb://localhost:27017/daily-info';

_mongoose.default.connect(db_url);

app.listen(port, function () {
  console.log("Server started on ".concat(port));
});
//# sourceMappingURL=index.js.map