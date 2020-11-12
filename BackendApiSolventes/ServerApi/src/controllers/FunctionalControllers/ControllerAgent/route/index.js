import { Router } from 'express'
import ControllerAgent from '../Controller'

const router = new Router()

//=========================================================================
// Agent
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA BUSCAR UN AGENTE
router.get('/', ControllerAgent.Search)
// ESTE ENDPOINT SERVIRA PARA BUSCAR UN AGENTE
router.get('/:id_agent', ControllerAgent.SearchSingle)
// ESTE ENDPOINT SERVIRA PARA CREAR UN NUEVO AGENTE
router.post('/', ControllerAgent.Create)
// ESTE ENDPOINT SERVIRA PARA CAMBIAR EL ESTADO DEL AGENTE DE HABILITADO A DESHABILITADO Y VICEVERSA
router.delete('/:id', ControllerAgent.Delete)

export default router