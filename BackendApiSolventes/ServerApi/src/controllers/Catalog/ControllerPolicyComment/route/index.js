import { Router } from 'express'
import ControllerCommentaryCatalogPolicy from '../Controller'

const router = new Router()
//=========================================================================
//  CatalogCommentaryPolicy
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE COMENTARIO DE UNA POLIZA
router.get('/:id_policy', ControllerCommentaryCatalogPolicy.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE COMENTARIO DE UNA POLIZA
router.post('/', ControllerCommentaryCatalogPolicy.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR EL ESTADO UN ELEMENTO EN EL CATALOGO COMENTARIO DE UNA POLIZA
router.patch('/:id_comment', ControllerCommentaryCatalogPolicy.ChangeStatus)


export default router