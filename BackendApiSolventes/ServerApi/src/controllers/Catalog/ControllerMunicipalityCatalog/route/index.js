import { Router } from 'express'
import ControllerMunicipalityCatalog from '../Controller'

const router = new Router()

//=========================================================================
//  MunicipalityCatalog
//=========================================================================
// ESTE ENDPOINT SERVIRA PARA MOSTRAR LOS DATOS DEL CATALOGO DE MUNICIPIO
router.get('/:id_department', ControllerMunicipalityCatalog.Search)
// ESTE ENDPOINT SERVIRA PARA CREAR UN ELEMENTO EN EL CATALOGO DE MUNICIPIO
router.post('/', ControllerMunicipalityCatalog.Create)
// ESTE ENDPOINT SERVIRA PARA ACTUALIZAR UN ELEMENTO EN EL CATALOGO DE MUNICIPIO
router.put('/', ControllerMunicipalityCatalog.Update)
// ESTE ENDPOINT SERVIRA PARA ELIMINAR UN ELEMENTO EN EL CATALOGO DE MUNICIPIO
router.delete('/:id', ControllerMunicipalityCatalog.Delete)

export default router