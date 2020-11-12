'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS ESTADOS DE LOS REQUERIMIENTOS */
class ControllerRequirementStatusCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE LOS ESTADOS DE LOS REQUERIMIENTOS
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_requirement_status '${body.requirement_status}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
            
        }).catch((err)=>{
            mssql.close();
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS REGISTROS DE LOS ESTADOS DE LOS REQUERIMIENTOS 
    static Search(req,res){
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_requirement_status`) 
        }).then((fields)=>{
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN REGISTRO DE LOS ESTADOS DE LOS REQUERIMIENTOS
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_requirement_status ${body.id_requirement_status},'${body.requirement_status}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }

    // ESTA FUNCION SERVIRA PARA ELIMINAR UN REGISTRO DE LOS ESTADOS DE LOS REQUERIMIENTOS 
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_requirement_status ${id}`)
        }).then((fields)=>{
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerRequirementStatusCatalog;