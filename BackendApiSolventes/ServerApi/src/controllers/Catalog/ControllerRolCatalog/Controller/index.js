'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS ROLES*/
class ControllerRolCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE ROL
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_rol '${body.rol}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
            
        }).catch((err)=>{
            mssql.close();
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS ROLES
    static Search(req,res){
        
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_rol`) 
        }).then((fields)=>{
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN ROL
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_rol ${body.id_rol},'${body.rol}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN ROL
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_rol ${id}`)
        }).then((fields)=>{
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerRolCatalog;