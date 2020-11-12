import { Router } from 'express'
import ControllerCommentaryCatalog from '../Controller'

const router = new Router()
//=========================================================================
//  CatalogCommentary
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE COMENTARIO
router.get('/:id_person', ControllerCommentaryCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE COMENTARIO
router.post('/', ControllerCommentaryCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO COMENTARIO
router.put('/', ControllerCommentaryCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE COMENTARIO
router.delete('/:id', ControllerCommentaryCatalog.Delete)

export default router