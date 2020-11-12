'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL CATALOGO DE COMERCIAL ACTIVITY*/
class ControllerComercialActivityCatalog{
    // ESTA FUNCIÓN SERVIRA PARA CREAR UN ELEMENTO DEL CATALOGO DE  COMERCIAL ACTIVITY
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_comercial_activity '${body.comercial_activity}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA MOSTRAR LOS ELEMENTOS DEL CATALOGO DE COMERCIAL ACTIVITY
    static Search(req,res){    
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_comercial_activity`)
        }).then((fields)=>{
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA ACTUALIZAR UN ELEMENTO DEL CATALOGO DE  COMERCIAL ACTIVITY
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_comercial_activity ${body.id},'${body.comercial_activity}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA ELIMINAR UN ELEMENTO DEL CATALOGO DE  COMERCIAL ACTIVITY
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_comercial_activity ${id}`)
        }).then((fields)=>{
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
}
export default ControllerComercialActivityCatalog;