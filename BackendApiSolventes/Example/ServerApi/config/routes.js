import { Router } from 'express'
import ControllerExample from '../controllers/ControllerExample'

const router = new Router()

router.get('/test', ControllerExample.Example)

export default router
