'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRÁ PARA MANEJAR LAS FECHAS DEL PERÍODO DEL SIB */
class ControllerSibPeriod {
    // ESTA FUNCIÓN SERVIRÁ PARA CREAR UN REGISTRO DEL PERÍODO DEL SIB
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_sib_period '${body.end_date}' `)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR TODOS LOS REGISTROS DEL PERÍODO DEL SIB
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_sib_period`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR UN REGISTRO DEL PERÍODO DEL SIB
    static SearchSingle(req, res) {
        let id = req.params.id_sib_period
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_sib_period ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR SI EL PERÍODO DEL SIB ESTÁ ABIERTO O CERRADO
    static SearchOpenClosed(req, res) {
        let id = req.params.id_sib_period
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_sib_period_openorclosed ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
            
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
    // ESTA FUNCION SERVIRA PARA CERRAR EL PERÍODO DEL SIB
    static UpdateClosed(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_sib_period_closed ${body.id_sib_period},'${body.id_user_closed}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED (CLOSED) SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close();
            res.json(err);
            

        })
    }
    // ESTA FUNCION SERVIRA PARA ABRIR EL PERÍODO DEL SIB
    static UpdateOpen(req,res){
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`EXEC sp_update_sib_period_open ${body.id_sib_period},'${body.id_user_open}'`)
        }).then((fields)=>{
            mssql.close();
            res.json("UPDATED (OPENED) SUCCESSFULLY");
            
        }).catch(err=>{
            mssql.close();
            res.json(err);
            

        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA DESHABILITAR O HABILITAR UN REGISTRO DEL PERÍODO DEL SIB
    static Delete(req, res) {
        let id_sib_period = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_sib_period ${id_sib_period}`)
        }).then((fields) => {
            mssql.close()
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
            
        })
    }
}

export default ControllerSibPeriod;