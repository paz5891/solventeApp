import { Router } from 'express'

import ControllerDepartmentCatalog from '../Controller'

const router = new Router()

//=========================================================================
//  DepartmentCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE DEPARTAMENTO
router.get('/', ControllerDepartmentCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE DEPARTAMENTO
router.post('/', ControllerDepartmentCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE DEPARTAMENTO
router.put('/', ControllerDepartmentCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE DEPARTAMENTO
router.delete('/:id', ControllerDepartmentCatalog.Delete)

export default router