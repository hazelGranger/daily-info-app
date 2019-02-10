import Router from 'koa-router'
import Controller from '../controllers/weather'

const router = new Router()

router.get('/', Controller.fetchAll)

export default router.routes()
