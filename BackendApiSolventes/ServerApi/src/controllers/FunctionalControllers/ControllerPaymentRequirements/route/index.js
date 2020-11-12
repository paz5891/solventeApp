import { Router } from 'express'
import ControllerPaymentRequirements from '../Controller'

const router = new Router()
//=========================================================================
// Payment Requirements
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA CREAR UN REQUERIMIENTO DE PAGO DE UNA POLIZA
router.post('/',ControllerPaymentRequirements.Create);
// ESTE ENDPOINT SERVIRA PARA BUSCAR UN REQUERIMIENTO DE PAGO DE UNA POLIZA
router.get('/:id_policy/policy', ControllerPaymentRequirements.Search)
// ESTA FUNCION SERVIRA PARA ANULAR UN REQUERIMIENTO DE PAGO
router.delete('/:id_payment_requirements', ControllerPaymentRequirements.Delete)

export default router