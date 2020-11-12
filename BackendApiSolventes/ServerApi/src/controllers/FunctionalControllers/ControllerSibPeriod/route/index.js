import { Router } from 'express'
import ControllerSibPeriod from '../Controller'

const router = new Router()

//=========================================================================
//  SibPeriod
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UN REGISTRO DEL PERIODO DEL SIB
router.get('/:id_sib_period', ControllerSibPeriod.SearchSingle)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR TODOS LOS REGISTROS DEL PERIODO DEL SIB
router.get('/', ControllerSibPeriod.Search)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR SI UN REGISTRO DEL PERIODO DEL SIB, ESTA ABIERTO O CERRADO
router.get('/sibperiodopenclosed', ControllerSibPeriod.SearchOpenClosed)
// ESTE ENDPOINT SERVIRA PARA CREAR UN REGISTRO DEL PERIODO DEL SIB
router.post('/', ControllerSibPeriod.Create)
// ESTE ENDPOINT SERVIRA PARA CERRAR EL PERIODO DEL SIB
router.put('/sibperiodclosed', ControllerSibPeriod.UpdateClosed)
// ESTE ENDPOINT SERVIRA PARA ABRIR EL PERIODO DEL SIB
router.put('/sibperiodopen', ControllerSibPeriod.UpdateOpen)
// ESTE ENDPOINT SERVIRA PARA DESHABILITAR O HABILITAR UN REGISTRO DEL PERÍODO DEL SIB
router.delete('/:id', ControllerSibPeriod.Delete)


export default router