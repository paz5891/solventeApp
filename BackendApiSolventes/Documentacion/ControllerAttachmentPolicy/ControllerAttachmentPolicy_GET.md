[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentPolicy (GET)

**DESCRIPCION**: este servira para obtener todos los documentos adjuntos de una poliza

**RUTA**:http://138.197.209.109:3000/api/attachmentpolicy/:id_policy

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_policy**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_policy": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
- **id_policy**: (int)
- **id_attachment_policy**: (int)
- **attachment**: (string)
- **description**: (string)
- **creation_date**: (date)
- **id_attachment_catalog_policy**: (int)
- **attachment_catalog_policy**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {   
          "id_policy": "(int)",  
          "id_attachment_policy": "(int)",  
          "attachment": "(string)",
          "description": "(string)",
          "creation_date": "(date)",
          "id_attachment_catalog_policy": "(id)",
          "attachment_catalog_policy": "(string)"   
      },
      ...
  ]
}
```
[RETORNO](../README.md)