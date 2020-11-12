import { Router } from 'express'
import ControllerPaymentStatusCatalog from '../Controller'

const router = new Router()
//=========================================================================
// ControllerPaymentStatusCatalog 
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS ESTADOS DE UN PAGO
router.get('/', ControllerPaymentStatusCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ESTADO DE UN PAGO
router.post('/', ControllerPaymentStatusCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ESTADO DE UN PAGO
router.put('/', ControllerPaymentStatusCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ESTADO DE UN PAGO
router.delete('/:id', ControllerPaymentStatusCatalog.Delete)

export default router