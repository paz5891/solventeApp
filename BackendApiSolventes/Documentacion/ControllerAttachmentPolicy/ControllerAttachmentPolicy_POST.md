[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentPolicy (POST)

**DESCRIPCION**: este servira para crear un documento adjunto de una poliza

**RUTA**:http://138.197.209.109:3000/api/attachmentpolicy

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_policy** : (int)
- **id_attachment_catalog_policy**: (int)
- **description**: (string) or (null)
    
# NOTA 
aparte de enviar este formato de json se necesita enviar el documento con el nombre de **attachment** como input file

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_policy": "(int)",
      "id_attachment_catalog_policy": "(int)",
      "description": "(string) or (null)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"CREATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)