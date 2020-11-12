'use strict'
import config from '../../../../config/Connect'
import { decryptpassword } from '../../../../config/tools/CreateUserAndPass'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS INICIOS DE SESION*/
class ControllerLogin {
    // ESTA FUNCION SERVIRA PARA INICIAR SESION COMO ANALISTA
    static LoginAnalyst(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_login_analyst '${body.username}'`)
        }).then((fields) => {
            mssql.close()
            try {
                let rows = fields.recordset;
                const pass = decryptpassword(rows[0].password);
                if (body.password === pass) {
                    res.json({ message: "ACCESS LOGIN CORRECT", id_user: rows[0].id_user });
                } else {
                    res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
                }
            } catch (error) {
                res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
            }
        }).catch(err => {
            mssql.close()
            console.log(err)
            res.json(err)

        })
    }

    // ESTA FUNCION SERVIRA PARA INICIAR SESION COMO AGENTE
    static LoginAgent(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_login_agent '${body.username}'`)
        }).then((fields) => {
            mssql.close()
            try {
                let rows = fields.recordset;
                const pass = decryptpassword(rows[0].password);
                if (body.password === pass) {
                    res.json({ message: "ACCESS LOGIN CORRECT", id_user: rows[0].id_user, id_agent: rows[0].id_agent });
                } else {
                    res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
                }
            } catch (error) {
                res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
            }
        }).catch(err => {
            mssql.close()
            console.log(err)
            res.json(err)

        })
    }

    // ESTA FUNCION SERVIRA PARA INICIAR SESION COMO UN COBRADOR
    static LoginDebtCollector(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_login_debt_collector '${body.username}'`)
        }).then((fields) => {
            mssql.close()
            try {
                let rows = fields.recordset;
                const pass = decryptpassword(rows[0].password);
                if (body.password === pass) {
                    res.json({ message: "ACCESS LOGIN CORRECT", id_user: rows[0].id_user });
                } else {
                    res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
                }
            } catch (error) {
                res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
            }
        }).catch(err => {
            mssql.close()
            console.log(err)
            res.json(err)

        })
    }

    // ESTA FUNCION SERVIRA PARA INICIAR SESION COMO ADMNISTRADOR
    static LoginAdmin(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_login_admin'${body.username}'`)
        }).then((fields) => {
            mssql.close()
            try {
                let rows = fields.recordset;
                const pass = decryptpassword(rows[0].password);
                if (body.password === pass) {
                    res.json({ message: "ACCESS LOGIN CORRECT", id_user: rows[0].id_user, id_agent: rows[0].id_agent });
                } else {
                    res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
                }
            } catch (error) {
                res.json({ message: "ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT" });
            }
        }).catch(err => {
            mssql.close()
            console.log(err)
            res.json(err)

        })
    }
}
export default ControllerLogin;