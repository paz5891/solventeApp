'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR A LOS AGENTES*/
class ControllerAgent {
    // ESTA FUNCION SERVIRA PARA CREAR UN AGENTE
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_agent ${body.id_person}`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS AGENTES
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_agent`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR UN SOLO AGENTE
    static SearchSingle(req, res) {
        let id = req.params.id_agent
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_searchsingle_agent ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO DEL AGENTE DE HABILITADO A DESHABILITADO Y VICEVERSA
    static Delete(req, res) {
        let id_agent = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_agent ${id_agent}`);
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close();
            res.json(err);
            
        })
    }
}
export default ControllerAgent;