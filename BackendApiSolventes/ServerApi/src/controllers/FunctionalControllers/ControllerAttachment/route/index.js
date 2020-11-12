import { Router } from 'express'
import multer from 'multer'

import ControllerAttachment from '../Controller'

const router = new Router()

//=========================================================================
//  Attachment
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE LOS DOCUMENTOS ADJUNTOS DE UNA PERSONA
router.get('/:id_person', ControllerAttachment.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO DE DOCUMENTOS ADJUNTOS DE UN PERSONA
router.post('/',multer({ storage: multer.memoryStorage() }).single("attachment"), ControllerAttachment.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE DOCUMENTOS ADJUNTOS DE UNA PERSONA
router.put('/',multer({ storage: multer.memoryStorage() }).single("attachment"), ControllerAttachment.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE DOCUMENTO ADJUNTO DE UNA PERSONA
router.delete('/:id', ControllerAttachment.Delete)

export default router