import { Router } from 'express'
import ControllerMenuCatalog from '../Controller'

const router = new Router()

//=========================================================================
//  MenuCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE MENU
router.get('/', ControllerMenuCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE MENU
router.post('/', ControllerMenuCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE MENU
router.put('/', ControllerMenuCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE MENU
router.delete('/:id', ControllerMenuCatalog.Delete)

export default router