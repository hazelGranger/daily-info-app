import Router from 'koa-router'
import Controller from '../controllers/expense'

const router = new Router()

router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.post('/delete_selected', Controller.deleteSelected)

export default router.routes()
