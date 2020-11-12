'use strict'
import config from '../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLLADOR SERVIRA PARA MANEJAR EL TESTEO PARA SABER SI EL CLIENTE SE PUEDE CONECTAR A LA API*/
class ControllerExample{
	/* esta funcion sirve de retorno un mensaje de si funciones el api*/
    static Example(req,res){
        // EJEMPLOS
        new mssql.ConnectionPool(config.config).connect().then((pool)=>{
            return pool.request().query(`SELECT * FROM [table]`)
        }).then((fields)=>{
            let rows = fields.recordset;
            res.json(rows);
            mssql.close()
        }).catch(err=>{
            res.json(err)
            mssql.close()
        })
    }
}
export default ControllerExample;