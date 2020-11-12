import { Router } from 'express'
import ControllerPolicyStatusCatalog from '../Controller'

const router = new Router()
//=========================================================================
// PolicyStatusCatalog 
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS ESTADOS DE LAS POLIZAS
router.get('/', ControllerPolicyStatusCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DEL ESTADO DE LAS POLIZAS
router.post('/', ControllerPolicyStatusCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE UN ESTADO DE POLIZa
router.put('/', ControllerPolicyStatusCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE UN ESTADO DE POLIZA
router.delete('/:id', ControllerPolicyStatusCatalog.Delete)

export default router