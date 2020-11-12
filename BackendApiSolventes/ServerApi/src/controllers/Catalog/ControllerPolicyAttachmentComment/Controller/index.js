'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR EL CATALOGO DE COMENTARIO DE UN ADJUNTO DE UNA POLIZA*/
class ControllerPolicyAttachmentComment {
    // ESTA FUNCION SERVIRA PARA CREAR UN ELEMENTO DEL CATALOGO DE COMENTARIO DE UN ADJUNTO DE UNA POLIZA
    static Create(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_commentary_policy_attachment ${body.id_policy},${body.id_user},${body.id_attachment_policy},'${body.comment}'`)
        }).then((fields) => {
            mssql.close()
            res.json("CREATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS ELEMENTOS DEL CATALOGO DE COMENTARIO DE UN ADJUNTO DE UNA POLIZA
    static Search(req, res) {
        let id = req.params.id_attachment_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_commentary_policy_attachment ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }

    // ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO DEL COMENTARIO DE UN ADJUNTO DE UNA POLIZA
    static ChangeStatus(req, res) {
        let id = req.params.id_comment;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_chagecheck_commentary_policy_attachment ${id}`)
        }).then((fields) => {
            mssql.close()
            res.json("UPDATE STATE COMMENT SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
}
export default ControllerPolicyAttachmentComment;