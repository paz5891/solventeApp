import { Router } from 'express'
import ControllerAttachmentPolicy from '../Controller'
import multer from 'multer'

const router = new Router()
//=========================================================================
//  Attachment Policy
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LOS DOCUMENTOS ADJUNTOS DE UNA POLIZA
router.get('/:id_policy', ControllerAttachmentPolicy.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DE DOCUMENTOS ADJUNTOS DE UNA POLIZA
router.post('/',multer({ storage: multer.memoryStorage() }).single("attachmentpolicy"), ControllerAttachmentPolicy.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE DOCUMENTOS ADJUNTOS DE UNA POLIZA
router.put('/',multer({ storage: multer.memoryStorage() }).single("attachmentpolicy"), ControllerAttachmentPolicy.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE DOCUMENTO ADJUNTO DE UNA POLIZA
router.delete('/:id', ControllerAttachmentPolicy.Delete)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE DOCUMENTO ADJUNTO DE UNA POLIZA
router.patch('/:id_attachment_policy', ControllerAttachmentPolicy.ChangeCheck)

export default router