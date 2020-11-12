import { Router } from 'express'
import ControllerAttachmentCatalog from '../Controller'

const router = new Router()
//=========================================================================
//  AttachmentCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE ADJUNTOS
router.get('/', ControllerAttachmentCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE ADJUNTOS
router.post('/', ControllerAttachmentCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE ADJUNTOS
router.put('/', ControllerAttachmentCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE ADJUNTOS
router.delete('/:id', ControllerAttachmentCatalog.Delete)

export default router