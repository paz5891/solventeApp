'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL CATALOGO DE COMENTARIO*/
class ControllerCommentaryCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN ELEMENTO DEL CATALOGO DE COMENTARIO
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_commentary ${body.id_person},'${body.commentary}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS ELEMENTOS DEL CATALOGO DE COMENTARIO
    static Search(req,res){    
        let id_person = req.params.id_person
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_commentary ${id_person}`)
        }).then((fields)=>{
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN ELEMENTO DEL CATALOGO DE COMENTARIO
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_commentary ${body.id_commentary},'${body.commentary}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN ELEMENTO DEL CATALOGO DE COMENTARIO
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_commentary ${id}`)
        }).then((fields)=>{
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
        })
    }
}
export default ControllerCommentaryCatalog;