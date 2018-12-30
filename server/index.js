import "@babel/polyfill"
import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import BodyParser from 'koa-bodyparser'
import Helmet from 'koa-helmet'
// import respond from 'koa-respond'
import Static from 'koa-static'
import mongoose from 'mongoose'
import { routes } from './routes'
import dotenv from 'dotenv'

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
app.use(Static('./build'))

dotenv.config()
console.log(process.env.NODE_ENV)

const port = 9093
let db_url = 'mongodb://localhost:27017/daily-info'

if (process.env.NODE_ENV === 'production') {
  db_url = 'mongodb://<name>:<password>@ds145584.mlab.com:45584/dailyinfo'
}

//

mongoose.connect(db_url)

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
