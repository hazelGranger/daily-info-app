import Router from 'koa-router'
import Controller from '../controllers/expense'

const router = new Router()

router.get('/', Controller.findAll)
router.post('/', Controller.create)
// router.delete('/:id', Controller.destroy)

export default router.routes()
