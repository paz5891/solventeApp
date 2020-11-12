[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de catalogo de Adjunto

**RUTA**:http://138.197.209.109:3000/api/attachmentcatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_attachment_catalog**: (int)
- **attachment**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_attachment_catalog":"(int)",
      "attachment": "(string)"
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