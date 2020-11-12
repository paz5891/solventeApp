import { Router } from 'express'
import ControllerRolMenu from '../Controller'

const router = new Router()


//=========================================================================
//  RolMenu
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LA ASIGNACIONES DE LOS MENUS A LOS ROLES
router.get('/', ControllerRolMenu.Search)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LA ASIGNACIONES DE LOS MENUS EN ROL ESPECIFICO CUANDO SE INICIA SESION
router.get('/:id_rol/:id_person', ControllerRolMenu.SearchMatrix)
// ESTE ENDPOINT SERVIRA PARA CREAR UNA ASIGNACION DE UN MENU A UN ROL
router.post('/', ControllerRolMenu.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UNA ASIGNACION DE UN MENU A UN ROL
router.put('/', ControllerRolMenu.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UNA ASIGNACION DE UN MENU A UN ROL
router.delete('/:id', ControllerRolMenu.Delete)

export default router