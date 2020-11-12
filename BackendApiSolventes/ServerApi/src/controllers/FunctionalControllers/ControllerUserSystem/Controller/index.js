'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';
import { makepassword, makeusername, decryptpassword } from '../../../../config/tools/CreateUserAndPass'
import { SendMail } from '../../../../config/tools/sendMail'

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR A LOS USUARIOS DEL SISTEMA*/
class ControllerUserSystem {
    // ESTA FUNCION SERVIRA PARA CREAR UN USUARIO DEL SISTEMA
    static async Create(req, res) {
        let body = req.body;
        let password = makepassword(8);
        let username = makeusername(body.first_name, body.second_name, body.first_surname, body.second_surname);
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_usersystem ${body.id_person}, '${username}', '${password}' `)
        }).then((fields) => {
            mssql.close();
            const bodymail = `<!DOCTYPE html>
            <html>
            <head>
            </head>
            <body style="background-color: #F2F3F4;">
                <div style="  font-family: 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic, 'AppleGothic', sans-serif;">
                    <center><h1 style=" font-size: 250%; color:  #A80A0A; text-shadow: 2px 2px 4px #707B7C;">Aseguradora Solvente S.A</h1></center>
                    <div style=" display: grid;  grid-template-rows: 10fr 2fr;">
                        <div style="margin: 5%; display: grid;  grid-template-columns: 3fr 10fr 2fr;">
                            <img src="https://backendapilast.blob.core.windows.net/private/1.png" style="width:100%">
                           <div style="display: grid;  grid-template-rows: 1fr 1fr; margin-left: 20px;;">
                                <div style=" font-size: 180%; margin-top: 3%;"><strong>Usuario:</strong>{{{user}}} </div>
                                <div style=" font-size: 180%;margin-top: 3%;"><strong>Contraseña:</strong>{{{pass}}} </div>
                           </div>
                        </div>
                        <div style="text-align: justify; margin: auto; background-color: #F1C40F; padding: 2%;  border-radius:5px; box-shadow: 10px 10px 5px grey;"><strong style="font-size: 120%;">Nota:</strong> Este usuario y esta contraseña es confidenciales solo usted la podra saber si en caso la extrabia o se la roban notificar de inmediato para su cambio</div>
                    </div>
                </div>
            </body>
            </html>`.replace('{{{user}}}', username).replace('{{{pass}}}', decryptpassword(password));
            const mail = SendMail(body.email, 'ENVIO DE CONTRASEÑA Y USUARIO', bodymail, 'html')
            res.json("CREATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            console.log(err)
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS USUARIOS DEL SISTEMA
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_usersystem`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);

        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }

    // ESTA FUNCION SERVIRA PARA MOSTRAR UN USUARIO DEL SISTEMA
    static SearchSingle(req, res) {
        let id = req.params.id_user;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_usersystemsingle ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);

        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO DEL USUARIO DEL SISTEMA DE HABILITADO A DESHABILITADO Y VICEVERSA
    static Delete(req, res) {
        let id_user = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_usersystem ${id_user}`);
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");

        }).catch(err => {
            mssql.close();
            res.json(err);

        })
    }

}
export default ControllerUserSystem;