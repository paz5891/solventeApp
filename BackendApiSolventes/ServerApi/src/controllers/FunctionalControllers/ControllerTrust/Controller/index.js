'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR A LOS FIADOS*/
class ControllerTrust {
    // ESTA FUNCIÓN SERVIRA PARA CREAR UN NUEVO FIADO (CONVERTIR UNA PERSONA A FIADO)
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_trust ${body.id_person}`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }

    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR LOS FIADOS 
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_trust`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }

    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR  UN FIADO
    static SearchSingle(req, res) {
        let id = req.params.id_trust
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_searchsingle_trust ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }

    // ESTA FUNCIÓN HABILITAR Y DESAHIBLITAR UN FIADO
    static Delete(req, res) {
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_trust ${id}`)
        }).then((fields) => {
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
}

export default ControllerTrust;