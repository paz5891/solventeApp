import { Router } from 'express'
import ControllerTypePaymentsCatalog from '../Controller'

const router = new Router()
//=========================================================================
// TYPEPAYMENTSCATALOG  
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LOS TIPOS DE PAGO
router.get('/', ControllerTypePaymentsCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DE TIPO DE PAGO
router.post('/', ControllerTypePaymentsCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE UN TIPO DE PAGO
router.put('/', ControllerTypePaymentsCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE UN TIPO DE PAGO
router.delete('/:id', ControllerTypePaymentsCatalog.Delete)

export default router