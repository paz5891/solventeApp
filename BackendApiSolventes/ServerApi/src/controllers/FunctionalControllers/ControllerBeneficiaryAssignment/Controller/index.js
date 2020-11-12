'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS REGISTROS DE LOS BENEFICIARIOS EN LAS POLIZAS*/
class ControllerBeneficiaryAssignment {
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE UNA ASIGNACION DE UN BENEFICIARIO A UNA POLIZA 
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_beneficiary_assignment ${body.id_beneficiary},${body.id_policy}`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA BUSCAR TODOS LOS REGISTROS DE LAS ASIGNACIONES DE LOS BENEFICIARIOS EN LAS POLIZAS
    static SearchAll(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_beneficiary_assignment_all`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA BUSCAR LOS REGISTRO DE ASIGNACION DE BENEFICIARIO A POLIZA POR EL ID DEL BENEFICIARIO
    static SearchBeneficiary(req, res) {
        let id = req.params.id_beneficiary;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_beneficiary_assignment_beneficiary ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA BUSCAR LOS REGISTRO DE ASIGNACION DE BENEFICIARIO A POLIZA POR EL ID DE LA POLIZA
    static SearchPolicy(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_beneficiary_assignment_policy ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN REGISTRO DE LA ASIGNACION DE BENEFICIARIO A POLIZA POR EL ID DE BENEFICIARIO Y EL ID DE POLIZA
    static Delete(req, res) {
        let body = req.params;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_beneficiary_assignment ${body.id_beneficiary},${body.id_policy}`);
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close();
            res.json(err);
        })
    }
}
export default ControllerBeneficiaryAssignment;