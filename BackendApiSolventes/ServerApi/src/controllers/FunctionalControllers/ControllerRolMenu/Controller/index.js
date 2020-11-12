'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LAS ASIGNACIONES DE LOS MENUS QUE PUEDEN ACCEDER LOS ROLES*/
class ControllerRolMenu {
    // ESTA FUNCION SERVIRA PARA CREAR UNA ASIGNACION DE UN MENU A UN ROL
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_rol_menu ${body.id_menu},${body.id_rol}`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS MENUS QUE FUERON ASIGNADOS A CADA ROL
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_rol_menu`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UNA ASIGNACION DE UN MENU A UN ROL
    static Update(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_update_rol_menu ${body.id},${body.id_menu},${body.id_rol}`)
        }).then((fields) => {
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UNA ASIGNACION DE MENU A UN ROL
    static Delete(req, res) {
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_rol_menu ${id}`)
        }).then((fields) => {
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }

     // ESTA FUNCION SERVIRA PARA MOSTRAR LOS MENUS CUANDO INICIE SESION UN ROL
     static SearchMatrix(req, res) {
         let id_rol = req.params.id_rol;
         let id_person = req.params.id_person;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_matrix_menus ${id},${id_person}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
}
export default ControllerRolMenu;