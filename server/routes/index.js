import expense from './expense'
import fs from 'fs'

const API = '/api'

export const routes = (router) => {
  router.use(`${API}/expense`, expense)

  router.get('/:page', async (ctx, next) => {
    ctx.response.type = 'html'
    ctx.response.body = await fs.createReadStream('./build/index.html')
  })
}
