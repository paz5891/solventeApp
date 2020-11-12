import { Router } from 'express'
import ControllerBeneficiaryAssignment from '../Controller'

const router = new Router()
//=========================================================================
// Beneficiary Assignment
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR TODOS LOS REGISTROS DE LAS ASIGNACIONES DE LOS BENEFICIARIOS EN LAS POLIZAS
router.get('/', ControllerBeneficiaryAssignment.SearchAll)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS REGISTROS DE ASIGNACION DE BENEFICARIO A POLIZA POR EL ID DEL BENEFICIARIO
router.get('/:id_beneficiary/beneficiary', ControllerBeneficiaryAssignment.SearchBeneficiary)
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS REGISTROS DE ASIGNACION DE BENEFICIARIO A POLIZA POR EL ID DE LA POLIZA
router.get('/:id_policy/policy', ControllerBeneficiaryAssignment.SearchPolicy)
// ESTE ENDPOINT SERVIRA PARA CREAR UN REGISTRO DE UNA ASIGNACION DE UN BENEFICIARIO A UNA POLIZA
router.post('/', ControllerBeneficiaryAssignment.Create)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN REGISTRO DE LA ASIGNACION DE BENEFICIARIO A POLIZA POR EL ID DE BENEFICIARIO Y EL ID DE POLIZA
router.delete('/:id_beneficiary/:id_policy', ControllerBeneficiaryAssignment.Delete)

export default router