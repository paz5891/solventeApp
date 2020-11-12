import { Router } from 'express'
import ControllerLogin from '../Controller'

const router = new Router()

//=========================================================================
//  ControllerLogin
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA INICIAR SESION COMO ANALISTA
router.post('/analyst', ControllerLogin.LoginAnalyst)
// ESTE ENDPOINT SERVIRA PARA INICIAR SESION COMO AGENTE
router.post('/agent', ControllerLogin.LoginAgent)
// ESTE ENDPOINT SERVIRA PARA INICIAR SESION COMO COBRADOR
router.post('/debtcollector', ControllerLogin.LoginDebtCollector)
// ESTE ENDPOINT SERVIRA PARA INICIAR SESION COMO ADMINISTRADOR
router.post('/admin', ControllerLogin.LoginAdmin)
export default router