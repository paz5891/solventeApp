import { Router } from 'express'
import ControllerTypePerson from '../Controller'

const router = new Router()
//=========================================================================
//  CatalogTypePerson
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE TYPE PERSON  
router.get('/', ControllerTypePerson.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE TYPE PERSON
router.post('/', ControllerTypePerson.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE TYPE PERSON
router.put('/', ControllerTypePerson.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE TYPE PERSON
router.delete('/:id', ControllerTypePerson.Delete)

export default router