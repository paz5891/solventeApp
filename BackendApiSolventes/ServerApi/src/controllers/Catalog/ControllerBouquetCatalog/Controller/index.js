'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS RAMOS*/
class ControllerBouquet{
    // ESTA FUNCIÓN SERVIRA PARA CREAR UN RAMO
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_bouquet '${body.bouquet}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA MOSTRAR LOS ELEMENTOS DE UN RAMO
    static Search(req,res){    
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_bouquet`)
        }).then((fields)=>{
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA ACTUALIZAR UN RAMO
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_bouquet ${body.id_bouquet},'${body.bouquet}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA ELIMINAR UN ELEMENTO DE UN RAMO
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_bouquet  ${id}`)
        }).then((fields)=>{
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
}
export default ControllerBouquet;