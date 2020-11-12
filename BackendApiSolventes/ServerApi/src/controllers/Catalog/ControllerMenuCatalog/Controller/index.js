'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL CATALOGO DE MENU*/
class ControllerMenuCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN ELEMENTO DEL CATALOGO DE MENU
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_menu_catalog '${body.menu}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS ELEMENTO DEL CATALOGO DE MENU
    static Search(req,res){    
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_menu_catalog`)
        }).then((fields)=>{
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN ELEMENTO DEL CATALOGO DE MENU
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_catalog_menu ${body.id_menu},'${body.menu}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN ELEMENTO DEL CATALOGO DE MENU
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_catalog_menu ${id}`)
        }).then((fields)=>{
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
}
export default ControllerMenuCatalog;