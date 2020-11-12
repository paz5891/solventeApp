import { Router } from 'express'
import ControllerAddress from '../Controller'

const router = new Router()

//=========================================================================
//  Address
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LAS DIRECCION DE UNA PERSONA
router.get('/:id_person', ControllerAddress.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DEL DIRECCION DE UN PERSONA
router.post('/', ControllerAddress.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DIRECCION DE UNA PERSONA
router.put('/', ControllerAddress.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DIRECCION DE UNA PERSONA
router.delete('/:id', ControllerAddress.Delete)

export default router