import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import BodyParser from 'koa-bodyparser'
import Helmet from 'koa-helmet'
import respond from 'koa-respond'
import mongoose from 'mongoose'
import { routes } from './routes'


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

routes(router)
app.use(router.routes())
app.use(router.allowedMethods())
// const main = ctx => {
//   ctx.response.body = 'Hello World'
// }
const port = 9093
const db_url = 'mongodb://localhost:27017/daily-info'

mongoose.connect(db_url)

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
