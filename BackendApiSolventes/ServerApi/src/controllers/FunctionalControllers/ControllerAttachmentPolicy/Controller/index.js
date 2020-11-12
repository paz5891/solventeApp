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
/* ESTE CONTROLADOR SERVIRA PARA MANEJAR LOS DOCUMENTOS ADJUNTOS DE POLIZAS*/
class ControllerAttachmentPolicy {
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO EN LOS DOCUMENTOS ADJUNTOS DE POLIZAS
    static async Create(req, res) {
        var attachment = req.file;
        var blobName = getBlobName(attachment.originalname);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        await uploadStream(containerClient, blobName, attachment.buffer);
        var url = `https://${key.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
        let body = JSON.parse(req.body.body);
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_attachment_policy ${body.id_policy},${body.id_attachment_catalog_policy},'${url}','${body.description}'`)
        }).then((fields) => {
            mssql.close();
            res.json("CREATED SUCCESSFULLY");

        }).catch((err) => {
            mssql.close();
            res.json(err)

        })
    }
    // ESTA FUNCION SERVIRA PARA MOSTRAR LOS DOCUMENTOS ADJUNTOS DE POLIZAS
    static Search(req, res) {
        let id = req.params.id_policy;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_attachment_policy ${id}`)
        }).then((fields) => {
            mssql.close();
            let rows = fields.recordset;
            res.json(rows);

        }).catch(err => {
            mssql.close();
            res.json(err);

        })
    }
    // ESTA FUNCION SERVIRA PARA ACTUALIZAR LOS DOCUMENTOS ADJUNTOS DE UNA POLIZA
    static async Update(req, res) {
        let body = JSON.parse(req.body.body);
        var attachment = req.file;
        var url = "";
        if (typeof attachment !== 'undefined') {
            let blobnameold = body.attachment_old.split("/")[(body.attachment_old.split("/").length - 1)];
            const containerClientold = blobServiceClient.getContainerClient(containerName);
            const blobClientold = containerClientold.getBlobClient(blobnameold);
            const blockBlobClientold = blobClientold.getBlockBlobClient();
            try {
                await blockBlobClientold.delete();
            } catch (error) { }
            const blobName = getBlobName(attachment.originalname);
            const containerClient = blobServiceClient.getContainerClient(containerName);
            url = `https://${key.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
            await uploadStream(containerClient, blobName, attachment.buffer);
        } else {
            url = body.attachment_old;
        }
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_update_attachment_policy ${body.id_attachment_policy},${body.id_policy},${body.id_attachment_catalog_policy},'${url}','${body.description}'`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
            mssql.close();
        }).catch(err => {
            res.json(err);

        })
    }
    // ESTA FUNCION SERVIRA PARA CAMBIAR EL CHECK DE VALIDACION DE UNA ADJUNTO DE UNA POLIZA
    static ChangeCheck(req, res) {
        let id = req.params.id_attachment_policy
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_revisioncheck_attachment_policy ${id}`)
        }).then((fields) => {
            mssql.close();
            res.json("CHANGE CHECK ATTACHMENT SUCCESSFULLY");

        }).catch(err => {
            mssql.close();
            res.json(err);

        })
    }
    // ESTA FUNCION SERVIRA PARA ELIMINAR UN DOCUMENTO ADJUNTO DE UNA POLIZA
    static Delete(req, res) {
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_attachment_policy ${id}`)
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");

        }).catch(err => {
            mssql.close();
            res.json(err);

        })
    }
}
export default ControllerAttachmentPolicy;