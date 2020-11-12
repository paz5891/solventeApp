import { Router } from 'express'
import ControllerRolCatalog from '../Controller'

const router = new Router()
//=========================================================================
// ROLCATALOG  
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LOS ROLES
router.get('/', ControllerRolCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DE ROL
router.post('/', ControllerRolCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE UN ROL
router.put('/', ControllerRolCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE UN ROL
router.delete('/:id', ControllerRolCatalog.Delete)

export default router