'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR lOS BENEFICIARIOS*/
class ControllerBeneficiary {
    // ESTA FUNCIÓN SERVIRA PARA CREAR UN NUEVO BENEFICIARIO (PARA TRANSFORMAR DE UNA PERSONA A UN BENEFICIARIO)
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_beneficiary ${body.id_person} `)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR LOS BENEFICIARIOS 
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_beneficiary`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR  UN BENEFICIARIO
    static SearchSingle(req, res) {
        let id = req.params.id_beneficiary
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_searchsingle_beneficiary ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }

    // ESTA FUNCIÓN HABILITAR Y DESAHIBLITAR UN BENEFICIARIO
    static Delete(req, res) {
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_beneficiary ${id}`)
        }).then((fields) => {
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
}

export default ControllerBeneficiary;