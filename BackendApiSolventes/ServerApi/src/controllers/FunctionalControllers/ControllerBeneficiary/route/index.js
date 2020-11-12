import { Router } from 'express'
import ControllerBeneficiary from '../Controller'

const router = new Router()

//=========================================================================
// Beneficiary
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS BENEFICIARIOS 
router.get('/', ControllerBeneficiary.Search);
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UN BENEFICIARIO
router.get('/:id_beneficiary', ControllerBeneficiary.SearchSingle);
// ESTE ENDPOINT SERVIRA PARA CREAR UN NUEVO BENEFICIARIO (PARA CONVETR DE UNA PERSONA A UN BENEFICIARIO)
router.post('/', ControllerBeneficiary.Create);
// ESTE ENDPOINT SERVIRA PARA HABILITAR Y DESHABILITAR UN BENEFICIARIO
router.delete('/:id', ControllerBeneficiary.Delete);

export default router