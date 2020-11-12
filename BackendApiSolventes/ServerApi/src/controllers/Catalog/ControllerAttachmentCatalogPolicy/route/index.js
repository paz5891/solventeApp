import { Router } from 'express'
import ControllerAttachmentCatalogPolicy from '../Controller'

const router = new Router()

//=========================================================================
//  AttachmentCatalogPolicy
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE ADJUNTOS DE LAS POLZAS
router.get('/', ControllerAttachmentCatalogPolicy.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE ADJUNTOS DE LAS POLIZAS
router.post('/', ControllerAttachmentCatalogPolicy.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE ADJUNTOS DE LAS POLIZAS
router.put('/', ControllerAttachmentCatalogPolicy.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE ADJUNTOS DE LAS POLIZAS
router.delete('/:id', ControllerAttachmentCatalogPolicy.Delete)

export default router