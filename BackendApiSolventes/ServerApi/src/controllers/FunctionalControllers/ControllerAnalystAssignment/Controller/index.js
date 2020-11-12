'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LA ASIGNACION DE ANALISTAS A POLIZAS*/
class ControllerAnalystAssignment {
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE ASIGNACION DE UN ANALISTA A UNA POLIZA 
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_analyst_assignment ${body.id_policy},${body.id_user}`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA BUSCAR TODOS LOS REGISTROS DE ASIGNACIONES DE ANALISTAS A POLIZAS
    static SearchAll(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_analyst_assignment_all`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA BUSCAR UN SOLO REGISTRO DE ASIGNACION DE ANALISTA A POLIZA
    static SearchSingle(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_analyst_assignment_single ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA BUSCAR LOS REGISTRO DE ASIGNACION DE ANALISTA A POLIZA POR EL ID DEL USUARIO DEL SISTEMA
    static SearchUser(req, res) {
        let id = req.params.id_user;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_analyst_assignment_single_usersystem ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN REGISTRO DE LAS ASIGNACIONES DE ANALISTAS A POLIZAS
    static Update(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_update_analyst_assignment ${body.id_analyst_assignment},'${body.status}',${body.id_user},${body.id_policy}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN REGISTRO DE LAS ASIGNACIONES DE ANALISTAS A POLIZAS
    static Delete(req, res) {
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_analyst_assignment ${id}`);
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close();
            res.json(err);
        })
    }
}
export default ControllerAnalystAssignment;