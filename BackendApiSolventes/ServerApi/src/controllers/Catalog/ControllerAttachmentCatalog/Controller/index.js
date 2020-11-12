'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL CATALOGO DE ADJUNTOS*/
class ControllerAttachmentCatalog{
    // ESTA FUNCION SERVIRA PARA CREAR UN ELEMENTO DEL CATALOGO DE ADJUNTO
    static Create(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_create_attachment_catalog '${body.attachment}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS ELEMENTOS DEL CATALOGO DE ADJUNTO
    static Search(req,res){    
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_search_attachment_catalog`)
        }).then((fields)=>{
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN ELEMENTO DEL CATALOGO DE ADJUNTO
    static Update(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_attachment_catalog ${body.id_attachment_catalog},'${body.attachment}'`)
        }).then((fields)=>{
            mssql.close()
            res.json("UPDATED SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA CREAR UN ELIMINAR EN ELEMENTO DEL CATALOGO DE ADJUNTO
    static Delete(req,res){
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_delete_attachment_catalog ${id}`)
        }).then((fields)=>{
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
        }).catch(err=>{
            mssql.close()
            res.json(err)
            
        })
    }
}
export default ControllerAttachmentCatalog;