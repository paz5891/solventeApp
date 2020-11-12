import { Router } from 'express'
import ControllerPolicy from '../Controller'
import multer from 'multer'

const router = new Router()

//=========================================================================
// Policy
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR TODAS LAS SOLICITUDES DE LAS POLIZAS
router.get('/', ControllerPolicy.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN REGISTRO DE SOLICITUD DE POLIZA
router.post('/', multer({ storage: multer.memoryStorage() }).any(), ControllerPolicy.Create)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR EL REGISTRO DE LA SOLICITUD DE UNA UNA POLIZA POR SU ID
router.get('/:id_policy/single', ControllerPolicy.SearchSinglePolicy)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR EL REGISTRO DE LA SOLICITUD DE UNA UNA POLIZA POR EL ID DE UN CLIENTE
router.get('/:id_trust/trust', ControllerPolicy.SearchTrust)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR EL REGISTRO DE LA SOLICITUD DE UNA UNA POLIZA POR EL ID DE UN AGENTE
router.get('/:id_agent/agent', ControllerPolicy.SearchAgent)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UN REGISTRO DE SOLICITUD DE POLIZA POR EL ID DEL USUARIO DEL SISTEMA
router.get('/:id_user', ControllerPolicy.SearchUserSystem)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UNA POLIZA CON ESTADO DE EMISION ACTIVA
router.get('/:id_policy/activepolicy', ControllerPolicy.SearchActivePolicy)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LA POLIZAS QUE SE LES ASIGNE A UN ANALISTA
router.get('/:id_user/revision', ControllerPolicy.SearchAnalyzeRevisionPolicy)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE UNA POLIZA EN ESPECIFICO QUE SE LES ASIGNE A UN ANALISTA
router.get('/:id_user/:id_policy/revision/single', ControllerPolicy.SearchAnalyzeRevisionSinglePolicy)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR TODAS LAS SOLICITUDES DE LAS POLIZAS POR ANALIZAR
router.get('/analyze/policy', ControllerPolicy.SearchAnalyzePolicy)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR EL ESTADO DE LA POLIZA (CUANTOS PAGOS HA REALIZADO Y CUANTOS HACEN FALTA)
router.get('/statepolicy/payment', ControllerPolicy.SearchStatePolicy)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN REGISTRO DE SOLICITUD DE POLIZA
router.put('/', ControllerPolicy.Update)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR EL ESTADO  DE UNA POLIZA
router.patch('/changepolicyrevisedapproved', ControllerPolicy.ChangePolicyrevisedapproved)
// ESTA FUNCION SERVIRA PARA ANULAR UNA POLIZA POR EL USUARIO DEL SISTEMA
router.patch('/changestate', ControllerPolicy.ChangeState)
// ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO UNA POLIZA A "PENDIENTE DEL PRIMER PAGO"
router.patch('/changestatependiente', ControllerPolicy.ChangeStatePendiente)
// ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO UNA POLIZA A "EMITIDA"
router.patch('/changestateissued', ControllerPolicy.ChangeStateIssued)
// ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO UNA POLIZA A "CANCELADA"
router.patch('/changestatecancelled', ControllerPolicy.ChangeStateCancelled)
// ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO UNA POLIZA A "REVISADO REALIZAR CAMBIOS"
router.patch('/changestaterevisionandfix', ControllerPolicy.ChangeStateRevisionAndFix)
// ESTA FUNCION SERVIRA PARA ANULAR UNA POLIZA POR EL USUARIO DEL SISTEMA
router.delete('/:id_policy', ControllerPolicy.Delete)

export default router