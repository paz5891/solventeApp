'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS REQUERIMIENTOS DE PAGO*/
class ControllerPaymentRequirements {

        // ESTA FUNCION SERVIRA PARA CREAR UN REQUERIMIENTO DE PAGO DE UNA POLIZA
        static Create(req, res) {
            let body = req.body;
            new mssql.ConnectionPool(config.config).connect().then((pool) => {
                return pool.request().query(`EXEC sp_create_payment_requirements ${body.id_policy},${body.id_user_creator_requirement},'${body.date_of_first_payment}',${body.validity},${body.prima}`)
            }).then((fields) => {
                mssql.close()
                res.json("CREATED SUCCESSFULLY");
            }).catch(err => {
                mssql.close()
                res.json(err)
    
            })
        }

    // ESTA FUNCION SERVIRA PARA OBTENER UN REQUERIMIENTO DE PAGO DE UNA POLIZA
    static Search(req, res) {
        let id = req.params.id_policy
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_payment_requirements ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCION SERVIRA PARA ANULAR UN REQUERIMIENTO DE PAGO
    static Delete(req, res) {
        let id = req.params.id_payment_requirements;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_payment_requirements ${id}`)
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
}
export default ControllerPaymentRequirements;