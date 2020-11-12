'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS PAGOS DE LOS REQUERIMIENTOS*/
class ControllerPayments {
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE PAGO DE UN REQUERIMIENTO 
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_payment ${body.id_payment_requirements},${body.id_type_payments},${body.id_user_payments}`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

       // ESTA FUNCION SERVIRA PARA ANULAR EL PAGO DE UN REQUERIMIENTO
       static Delete(req, res) {
        let id = req.params.id_payments;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC  sp_delete_payment ${id}`)
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
}
export default ControllerPayments;