import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import BodyParser from 'koa-bodyparser'
import Helmet from 'koa-helmet'
import respond from 'koa-respond'
import mongoose from 'mongoose'


const app = new Koa()
const router = new Router()

app.use(Helmet())
app.use(Logger())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: (err, ctx) => {
    ctx.throw('body parse error')
  }
}))

require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())
// const main = ctx => {
//   ctx.response.body = 'Hello World'
// }

app.use(main)
app.listen(3000)
