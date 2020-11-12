import { Router } from 'express'
import ControllerRequirementStatusCatalog from '../Controller'

const router = new Router()
//=========================================================================
// RequirementStatusCatalog 
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS ESTADOS DE LOS REQUERIMIENTOS
router.get('/', ControllerRequirementStatusCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DE LOS ESTADOS DE LOS REQUERIMIENTOS
router.post('/', ControllerRequirementStatusCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE LOS ESTADOS DE LOS REQUERIMIENTOS
router.put('/', ControllerRequirementStatusCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE LOS ESTADOS DE LOS REQUERIMIENTOS
router.delete('/:id', ControllerRequirementStatusCatalog.Delete)

export default router