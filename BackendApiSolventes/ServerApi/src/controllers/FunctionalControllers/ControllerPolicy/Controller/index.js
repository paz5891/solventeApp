'use strict'
import config from '../../../../config/Connect'
import mssql from 'mssql';
import { StorageSharedKeyCredential, BlobServiceClient } from '@azure/storage-blob';
import intostream from 'into-stream';
import key from '../../../../config/key'

if (process.env.NODE_ENV !== 'production') { require("dotenv").config() }

const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT;
const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCESS_KEY;
const ONE_MEGABYTE = 1024 * 1024;
const FOUR_MEGABYTES = 4 * ONE_MEGABYTE;

const credentials = new StorageSharedKeyCredential(STORAGE_ACCOUNT_NAME, ACCOUNT_ACCESS_KEY);
const blobServiceClient = new BlobServiceClient(`https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`, credentials);
const containerName = "attachmentpolicy";

async function uploadStream(containerClient, blobName, bytes) {
    const blobClient = containerClient.getBlobClient(blobName);
    const blockBlobClient = blobClient.getBlockBlobClient();
    var stream = intostream(bytes);
    const uploadOptions = {
        bufferSize: FOUR_MEGABYTES,
        maxBuffers: 5,
    };
    return await blockBlobClient.uploadStream(stream, uploadOptions.bufferSize, uploadOptions.maxBuffers);
}

const getBlobName = originalName => {
    const identifer = Math.random().toString().replace(/0\./, '')
    return `${identifer}-${originalName}`
}

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LAS SOLICITUDES DE POLIZA*/
class ControllerPolicy {
    // ESTA FUNCION SERVIRA PARA CREAR UNA SOLICITUD DE POLIZA
    static async Create(req, res) {
        let body = JSON.parse(req.body.body);
        var attachments = req.files;
        for (let j = 0; j < attachments.length; j++) {
            let index = 0;
            for (let i = 0; i < body.attachment_policy.length; i++) {
                if (body.attachment_policy[i].attachment == attachments[j].originalname) {
                    index = i;
                    break;
                }
            }
            const blobName = getBlobName(attachments[j].originalname);
            const containerClient = blobServiceClient.getContainerClient(containerName);
            body.attachment_policy[index].attachment = `https://${key.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
            await uploadStream(containerClient, blobName, attachments[j].buffer);
        }

        let tmpbody = JSON.stringify(body).replace(/"null"/g, "null");
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_policy '${tmpbody}'`)
        }).then((fields) => {
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
        }).catch((err) => {
            mssql.close();
            res.json(err);
        })
    }
    //ESTA FUNCION SERVIRA PARA MOSTRAR UNA POLIZA POR SU ID
    static SearchSinglePolicy(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_single ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    //ESTA FUNCION SERVIRA PARA MOSTRAR UNA POLIZA POR EL ID DE UN AGENTE
    static SearchAgent(req, res) {
        let id = req.params.id_agent;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_agent_single ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    //ESTA FUNCION SERVIRA PARA MOSTRAR UNA POLIZA POR EL ID DE UN CLIENTE
    static SearchTrust(req, res) {
        let id = req.params.id_trust;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_trust_single ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR UNA POLIZA POR EL USUARIO DEL SISTEMA
    static SearchUserSystem(req, res) {
        let id = req.params.id_user;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_usersystem_single ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    //ESTA FUNCION SERVIRA PARA MOSTRAR UNA POLIZA CON ESTADO DE EMISION ACTIVA
    static SearchActivePolicy(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_stateEmission ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LAS SOLICITUDES DE POLIZA POR ANALIZAR
    static SearchAnalyzePolicy(req, res) {
        let id = 1001;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_state ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LAS SOLICITUDES DE POLIZA POR ANALIZAR POR ANALISTA
    static SearchAnalyzeRevisionPolicy(req, res) {
        let id = req.params.id_user;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_analyst_revision ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR UNA SOLICITUD DE POLIZA POR ANALIZAR POR ANALISTA
    static SearchAnalyzeRevisionSinglePolicy(req, res) {
        let id_user = req.params.id_user;
        let id_policy = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_analyst_revision_single ${id_user},${id_policy}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    //ESTA FUNCION SERVIRA PARA MOSTRAR EL ESTADO DE LA POLIZA (CUANTOS PAGOS HA REALIZADO Y CUANTOS HACEN FALTA)
    static SearchStatePolicy(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_payment_policy_status ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA PARA MOSTRAR TODAS LAS SOLICITUDES DE LAS POLIZAS
    static Search(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_policy_all`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA PARA ACTUALIZAR LOS ESTADOS DE UNA POLIZA
    static ChangePolicyrevisedapproved(req, res) {
        let body = req.body;
        let id_policy_status = 1003;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC  sp_changeState_policy ${body.id_policy},${id_policy_status}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED POLICY STATUS revisado aprobado SUCCESSFULLY");
        }).catch(err => {
            mssql.close();
            res.json(err);
        })
    }

    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UNA SOLICITUD DE POLIZA
    static Update(req, res) {
        let body = req.body;
        let tmp = JSON.stringify(body);
        body = JSON.parse(tmp);
        let tmpbody = JSON.stringify(body).replace(/"null"/g, "null");
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_update_policy '${tmpbody}'`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close();
            res.json(err);
        })
    }

    // ESTA FUNCION SERVIRA CAMBIAR EL ESTADO DE UNA POLIZA
    static ChangeState(req, res) {
        let body = req.body;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_changeState_policy ${body.id_policy},${body.id_policy_status}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED POLICY STATUS SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA CAMBIAR EL ESTADO DE UNA POLIZA A "PENDIENTE DEL PRIMER PAGO"
    static ChangeStatePendiente(req, res) {
        let body = req.body;
        let id_policy_status = 1004;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_changeState_policy ${body.id_policy},${id_policy_status}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED POLICY STATUS Pendiente del primer pago SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA CAMBIAR EL ESTADO DE UNA POLIZA A "EMITIDA"
    static ChangeStateIssued(req, res) {
        let body = req.body;
        let id_policy_status = 1005;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_changeState_policy ${body.id_policy},${id_policy_status}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED POLICY STATUS Emitida SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCION SERVIRA CAMBIAR EL ESTADO DE UNA POLIZA A "CANCELADA"
    static ChangeStateCancelled(req, res) {
        let body = req.body;
        let id_policy_status = 1006;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_changeState_policy ${body.id_policy},${id_policy_status}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED POLICY STATUS Cancelada SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA CAMBIAR EL ESTADO DE UNA POLIZA A "REVISADO REALIZAR CAMBIOS"
    static ChangeStateRevisionAndFix(req, res) {
        let body = req.body;
        let id_policy_status = 1002;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_changeState_policy ${body.id_policy},${id_policy_status}`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED POLICY STATUS Revisado realizar cambios SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }

    // ESTA FUNCION SERVIRA PARA ANULAR UNA POLIZA POR EL USUARIO DEL SISTEMA
    static Delete(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_changeState_policy ${id}, 1007`)
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
}

export default ControllerPolicy;