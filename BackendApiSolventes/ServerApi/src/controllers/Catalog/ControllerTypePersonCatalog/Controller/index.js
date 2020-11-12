'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL CATALOGO DE TYPE PERSON*/
class ControllerTypePerson{
    // ESTA FUNCIÓN SERVIRA PARA CREAR UN ELEMENTO DEL CATALOGO DE TYPE PERSON
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_type_person '${body.type_person}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA MOSTRAR LOS ELEMENTOS DEL CATALOGO TYPE PERSON
    static Search(req,res){    
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_type_person`)
        }).then((fields)=>{
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA ACTUALIZAR UN ELEMENTO DEL CATALOGO DE TYPE PERSON
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_type_person ${body.id_type_person},'${body.type_person}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRA PARA ELIMINAR UN ELEMENTO DEL CATALOGO DE TYPE PERSON
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_type_person ${id}`)
        }).then((fields)=>{
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
}
export default ControllerTypePerson;