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
const containerName = "attachmentperson";

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

/* ESTE CONTROLADOR SERVIRA PARA MANEJAR A LAS PERSONAS*/
class ControllerPerson {
    // ESTA FUNCION SERVIRA PARA CREAR UN REGISTRO DE PERSONA
    static async Create(req, res) {
        let body = JSON.parse(req.body.body);
        var attachments = req.files;
        for (let j = 0; j < attachments.length; j++) {
            let index = 0;
            var avatar = false;
            for (let i = 0; i < body.attachment_person.length; i++) {
                if (body.attachment_person[i].attachment == attachments[j].originalname) {
                    index = i;
                    break;
                }
            }
            if (body.avatar == attachments[j].originalname) {
                avatar = true;
            }

            const blobName = getBlobName(attachments[j].originalname);
            const containerClient = blobServiceClient.getContainerClient(containerName);

            if (avatar == false) {
                body.attachment_person[index].attachment = `https://${key.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
                await uploadStream(containerClient, blobName, attachments[j].buffer);
            } else {
                body.avatar = `https://${key.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
                await uploadStream(containerClient, blobName, attachments[j].buffer);
            }
        }
        if (body.date_of_birth != null) { body.date_of_birth = body.date_of_birth.replace(/"/g, ""); }
        if (body.constitution_date != null) { body.constitution_date = body.constitution_date.replace(/"/g, ""); }
        let tmpbody = JSON.stringify(body).replace(/"null"/g, "null");
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_create_person '${tmpbody}'`)
        }).then((fields) => {
            mssql.close();
            res.json("CREATED SUCCESSFULLY");
        }).catch((err) => {
            mssql.close();
            res.json(err);
        })
    }

    // ESTA FUNCION SERVIRA PARA ACTUALIZAR UN ELEMENTO DE LA PERSONA
    static async Update(req, res) {
        let body = JSON.parse(req.body.body);
        if (typeof req.file !== "undefined" ) {
            let blobnameold = body.avatar.split("/")[(body.avatar.split("/").length - 1)];
            console.log(blobnameold);
            const containerClientold = blobServiceClient.getContainerClient(containerName);
            const blobClientold = containerClientold.getBlobClient(blobnameold);
            const blockBlobClientold = blobClientold.getBlockBlobClient();
            try {
                await blockBlobClientold.delete();    
            } catch (error) {}
            var attachment = req.file;
            const blobName = getBlobName(attachment.originalname);
            const containerClient = blobServiceClient.getContainerClient(containerName);

            body.avatar = `https://${key.getStorageAccountName()}.blob.core.windows.net/${containerName}/${blobName}`;
            await uploadStream(containerClient, blobName, attachment.buffer);
        }
        if (body.date_of_birth != null) { body.date_of_birth = body.date_of_birth.replace(/"/g, ""); }
        if (body.constitution_date != null) { body.constitution_date = body.constitution_date.replace(/"/g, ""); }
        let tmpbody = JSON.stringify(body).replace(/"null"/g, "null");
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_update_person '${tmpbody}'`)
        }).then((fields) => {
            mssql.close();
            res.json("UPDATED SUCCESSFULLY");
        }).catch(err => {
            mssql.close();
            res.json(err);
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR A TODAS LAS PERSONAS 
    static SearchAll(req, res) {
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_personall`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR A LAS PERSONAS DE ACUERDO A SU TIPO DE PERSONA 
    static SearchType(req, res) {
        let id = req.params.id_type_person;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_person ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)
        })
    }
    // ESTA FUNCIÓN SERVIRÁ PARA MOSTRAR UNA SOLA PERSONA
    static SearchSingle(req, res) {
        let id = req.params.id_person;
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_search_personsingle ${id}`)
        }).then((fields) => {
            mssql.close()
            let rows = fields.recordset;
            res.json(rows);
        }).catch(err => {
            mssql.close()
            res.json(err)

        })
    }
    // ESTA FUNCION SERVIRA PARA CAMBIAR EL ESTADO DE LA PERSONA DE HABILITADO A DESHABILITADO Y VICEVERSA
    static Delete(req, res) {
        let id = req.params.id
        new mssql.ConnectionPool(config.config).connect().then((pool) => {
            return pool.request().query(`EXEC sp_delete_person ${id}`);
        }).then((fields) => {
            mssql.close();
            res.json("DELETED SUCCESSFULLY");

        }).catch(err => {
            mssql.close();
            res.json(err);

        })
    }
}


export default ControllerPerson;

