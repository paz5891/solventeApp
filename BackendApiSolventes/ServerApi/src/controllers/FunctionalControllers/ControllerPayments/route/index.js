import { Router } from 'express'
import ControllerPayments from '../Controller'

const router = new Router()
//=========================================================================
// Payments
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA CREAR UN REGISTRO DE PAGO DE UN REQUERIMIENTO
router.post('/', ControllerPayments.Create)
// ESTE ENDPOINT SERVIRA PARA ANULAR EL PAGO DE UN REQUERIMIENTO
router.delete('/:id_payments',ControllerPayments.Delete)

export default router