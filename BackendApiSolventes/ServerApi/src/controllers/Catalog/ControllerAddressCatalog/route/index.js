import { Router } from 'express'
import ControllerAddressCatalog from '../Controller'

const router = new Router()

//=========================================================================
//  AddressCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE DIRECCION
router.get('/', ControllerAddressCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE DIRECCION
router.post('/', ControllerAddressCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE DIRECCION
router.put('/', ControllerAddressCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE DIRECCION
router.delete('/:id', ControllerAddressCatalog.Delete)

export default router