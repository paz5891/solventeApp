import { Router } from 'express'
import ControllerUserSystem from '../Controller'
const router = new Router()

//=========================================================================
// UserSystem
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA BUSCAR USUARIO DEL SISTEMA
router.get('/', ControllerUserSystem.Search)
// ESTE ENDPOINT SERVIRA PARA BUSCAR UN USUARIO DEL SISTEMA
router.get('/:id_user', ControllerUserSystem.SearchSingle)
// ESTE ENDPOINT SERVIRA PARA CREAR UN NUEVO USUARIO DEL SISTEMA
router.post('/', ControllerUserSystem.Create)
// ESTE ENDPOINT SERVIRA PARA CAMBIAR EL ESTADO DEL USUARIO DEL SISTEMA DE HABILITADO A DESHABILITADO Y VICEVERSA
router.delete('/:id', ControllerUserSystem.Delete)

export default router