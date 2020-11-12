import { Router } from 'express'
import ControllerPerson from '../Controller'
import multer from 'multer'

const router = new Router()
//=========================================================================
// Person
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA CREAR UN REGISTRO DE LAS PERSONAS
router.post('/', multer({ storage: multer.memoryStorage() }).any(), ControllerPerson.Create)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR A TODAS LAS PERSONAS
router.get('/', ControllerPerson.SearchAll)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR A TODAS LAS PERSONAS POR TIPO DE PERSONAS
router.get('/:id_type_person/type_person', ControllerPerson.SearchType)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UNA PERSONA
router.get('/:id_person', ControllerPerson.SearchSingle)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE LA PERSONA
router.put('/', multer({ storage: multer.memoryStorage() }).single("avatar_file"), ControllerPerson.Update)
// ESTE ENDPOINT SERVIRA PARA CAMBIAR EL ESTADO DE LA PERSONA DE HABILITADO A DESHABILITADO Y VICEVERSA
router.delete('/:id', ControllerPerson.Delete)

export default router