import expense from './expense'
import currency from './currency'
import fs from 'fs'

const API = '/api'

export const routes = (router) => {
  router.use(`${API}/expense`, expense)

  router.use(`${API}/currency`, currency)

  router.get('/:page', async (ctx, next) => {
    ctx.response.type = 'html'
    ctx.response.body = await fs.createReadStream('./build/index.html')
  })
}
