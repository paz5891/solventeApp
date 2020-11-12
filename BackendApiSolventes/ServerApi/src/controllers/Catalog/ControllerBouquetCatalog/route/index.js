import { Router } from 'express'

import ControllerBouquet from '../Controller'

const router = new Router()
//=========================================================================
//  Bouquet
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DE UN RAMO
router.get('/',ControllerBouquet.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN RAMO
router.post('/',ControllerBouquet.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO DE UN RAMO
router.put('/', ControllerBouquet.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO DE UN RAMO
router.delete('/:id', ControllerBouquet.Delete)

export default router