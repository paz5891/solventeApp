[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentPolicy (PUT)

**DESCRIPCION**: este servira para actualizar un documento adjunto de poliza

**RUTA**:http://138.197.209.109:3000/api/attachmentpolicy

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_attachment_policy**: (int)
- **id_policy**: (int)
- **id_attachment_catalog_policy**: (int)
- **attachment_policy_old**: (string)
- **description**: (string)

# NOTA 
aparte de enviar este formato de json se necesita enviar el documento con el nombre de **attachment** como input file    

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_attachment_policy": "(int)",
      "id_policy":"(int)",
      "id_attachment_catalog_policy":"(int)",
      "attachment_policy_old":"(string)",
      "description": "(string)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)