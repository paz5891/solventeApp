import { Router } from 'express'
import ControllerBouquetTypeCatalog  from '../Controller'

const router = new Router()

//=========================================================================
//  CatalogBouquetType
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE COMENTARIO
router.get('/:id_bouquet', ControllerBouquetTypeCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE COMENTARIO
router.post('/', ControllerBouquetTypeCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO COMENTARIO
router.put('/', ControllerBouquetTypeCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE COMENTARIO
router.delete('/:id', ControllerBouquetTypeCatalog.Delete)


export default router