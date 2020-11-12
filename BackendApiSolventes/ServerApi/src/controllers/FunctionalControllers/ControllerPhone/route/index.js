import { Router } from 'express'
import ControllerPhone from '../Controller'

const router = new Router()

//=========================================================================
//  Phone
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS TELEFONO DE UN PERSONA
router.get('/:id_person', ControllerPhone.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL TELEFONO DE UN PERSONA
router.post('/', ControllerPhone.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DEL TELEFONO DE UN PERSONA
router.put('/', ControllerPhone.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN TELEFONO DE UN PERSONA
router.delete('/:id', ControllerPhone.Delete)

export default router