import { Router } from 'express'
import ControllerTrust from '../Controller'

const router = new Router()

//=========================================================================
//  Trust
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS FIADOS 
router.get('/', ControllerTrust.Search);
// ESTE ENDPOINT SERVIRA PARA MOSTRAR UN FIADO
router.get('/:id_trust', ControllerTrust.SearchSingle);
// ESTE ENDPOINT SERVIRA PARA CREAR UN NUEVO FIADO (PARA CONVERTIR DE UNA PERSONA A FIADO)
router.post('/', ControllerTrust.Create);
// ESTE ENDPOINT SERVIRA PARA DESAHIBILITAR O HABILITAR UN FIADO
router.delete('/:id', ControllerTrust.Delete);

export default router