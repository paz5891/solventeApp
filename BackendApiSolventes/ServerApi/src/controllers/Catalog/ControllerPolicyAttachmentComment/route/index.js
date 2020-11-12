import { Router } from 'express'
import ControllerPolicyAttachmentComment from '../Controller'

const router = new Router()
//=========================================================================
//  CatalogCommentaryPolicy
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE COMENTARIO DE UN ADJUNTO DE UNA POLIZA
router.get('/:id_attachment_policy', ControllerPolicyAttachmentComment.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE COMENTARIO DE UN ADJUNTO DE UNA POLIZA
router.post('/', ControllerPolicyAttachmentComment.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR EL ESTADO UN ELEMENTO EN EL CATALOGO DE ADJUNTO COMENTARIO DE UNA POLIZA
router.patch('/:id_comment', ControllerPolicyAttachmentComment.ChangeStatus)


export default router