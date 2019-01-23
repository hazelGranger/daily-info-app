import Router from 'koa-router'
import Controller from '../controllers/currency'

const router = new Router()

router.get('/', Controller.findAll)

export default router.routes()
