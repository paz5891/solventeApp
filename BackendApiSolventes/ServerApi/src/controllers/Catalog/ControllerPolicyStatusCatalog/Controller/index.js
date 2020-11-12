'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS ESTADOS DE LAS POLIZAS */
class ControllerPolicyStatusCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE ESTADO DE UNA POLIZA
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_policy_status '${body.policy_status}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
            
        }).catch((err)=>{
            mssql.close();
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS REGISTROS DE ESTADO DE LAS POLIZAS 
    static Search(req,res){
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_policy_status`) 
        }).then((fields)=>{
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN REGISTRO DE ESTADO DE UNA POLIZA
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_policy_status ${body.id_policy_status},'${body.policy_status}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }

    // ESTA FUNCION SERVIRA PARA ELIMINAR UN REGISTRO DE ESTADO DE UNA POLIZA 
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_policy_status ${id}`)
        }).then((fields)=>{
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerPolicyStatusCatalog;