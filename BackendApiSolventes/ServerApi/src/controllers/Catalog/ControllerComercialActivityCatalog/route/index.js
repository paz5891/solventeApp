import { Router } from 'express'
import ControllerComercialActivityCatalog from '../Controller'
const router = new Router()

//=========================================================================
//  ComercialActivityCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE COMERCIAL ACTIVITY
router.get('/', ControllerComercialActivityCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE COMERCIAL ACTIVITY
router.post('/', ControllerComercialActivityCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO COMERCIAL ACTIVITY
router.put('/', ControllerComercialActivityCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE COMERCIAL ACTIVITY
router.delete('/:id', ControllerComercialActivityCatalog.Delete)


export default router