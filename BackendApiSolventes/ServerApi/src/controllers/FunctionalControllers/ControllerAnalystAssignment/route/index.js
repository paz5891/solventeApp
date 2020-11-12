import { Router } from 'express'
import ControllerAnalystAssignment from '../Controller'

const router = new Router()

//=========================================================================
// Analyst Assignment
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR TODAS LAS ASIGNACIONES DE ANALISTAS A POLIZAS
router.get('/', ControllerAnalystAssignment.SearchAll)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UNA DE LAS ASIGNACIONES DE ANALISTAS A POLIZAS
router.get('/:id_policy/policy', ControllerAnalystAssignment.SearchSingle)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LAS ASIGNACIONES DE ANALISTAS A POLIZAS POR EL ID DEL USUARIO DEL SISTEMA
router.get('/:id_user/usersystem', ControllerAnalystAssignment.SearchUser)
// ESTE ENDPOINT SERVIRA PARA CREAR UN REGISTRO DE ASIGNACION DE ANALISTA A POLIZA
router.post('/', ControllerAnalystAssignment.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN REGISTRO DE ASIGNACION DE ANALISTA A POLIZA
router.put('/', ControllerAnalystAssignment.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN REGISTRO DE ASIGNACION DE ANALISTA A POLIZA
router.delete('/:id', ControllerAnalystAssignment.Delete)

export default router