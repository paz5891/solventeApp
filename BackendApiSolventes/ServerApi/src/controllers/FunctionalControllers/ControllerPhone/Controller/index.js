'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS TELEFONOS*/
class ControllerPhone{
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DEL TELEFONO
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_phone ${body.id_person},${body.id_phone_catalog},'${body.phone}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
            
        }).catch((err)=>{
            mssql.close();
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS TELEFONOS DE UNA PERSONA
    static Search(req,res){
        let id = req.params.id_person;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_phone ${id}`) 
        }).then((fields)=>{
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN TELEFONO DE UNA PERSONA
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_phone ${body.id_phone},${body.id_person},${body.id_phone_catalog},'${body.phone}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close();
            res.json(err);
            

        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN TELEFONO DE UNA PERSONA
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_phone ${id}`)
        }).then((fields)=>{
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerPhone;