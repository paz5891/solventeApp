import { Router } from 'express'
import ControllerPhoneCatalog from '../Controller'

const router = new Router()
//=========================================================================
//  PhoneCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE TELEFONO
router.get('/', ControllerPhoneCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE TELEFONO
router.post('/', ControllerPhoneCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE TELEFONO
router.put('/', ControllerPhoneCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE TELEFONO
router.delete('/:id', ControllerPhoneCatalog.Delete)

export default router