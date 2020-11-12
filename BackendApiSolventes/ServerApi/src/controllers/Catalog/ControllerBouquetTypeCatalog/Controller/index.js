'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL TIPO DE RAMO */
class ControllerBouquetTypeCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN TIPO DE RAMO
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_bouquet_type ${body.id_bouquet},'${body.bouquet_type}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
            
        }).catch((err)=>{
            mssql.close();
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS TIPOS DE RAMO
    static Search(req,res){
        let id = req.params.id_bouquet;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_bouquet_type ${id}`) 
        }).then((fields)=>{
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR EL TIPO DE RAMO
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_bouquet_type ${body.id_bouquet_type},${body.id_bouquet},'${body.bouquet_type}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
        })
    }

    // ESTA FUNCION SERVIRA PARA ELIMINAR UN TIPO DE RAMO
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_bouquet_type ${id}`)
        }).then((fields)=>{
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerBouquetTypeCatalog;