'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS TIPOS DE PAGO*/
class ControllerTypePaymentsCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE TIPO DE PAGO
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_type_payments '${body.type_payments}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
            
        }).catch((err)=>{
            mssql.close();
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS TIPOS DE PAGO
    static Search(req,res){
        
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_type_payments`) 
        }).then((fields)=>{
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN TIPO DE PAGO
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_type_payments ${body.id_type_payments},'${body.type_payments}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN TIPO DE PAGO
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_type_payments ${id}`)
        }).then((fields)=>{
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerTypePaymentsCatalog;