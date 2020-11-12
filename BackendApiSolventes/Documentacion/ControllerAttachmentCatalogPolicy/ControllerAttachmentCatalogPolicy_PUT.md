[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentCatalogPolicy (PUT)

**DESCRIPCION**: este servira para actualizar un registro de catalogo de adjunto de las polizas

**RUTA**:http://138.197.209.109:3000/api/attachmentcatalogpolicy

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_attachment_catalog_policy**: (int)
- **attachment_catalog_policy**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_attachment_catalog_policy":"(int)",
      "attachment_catalog_policy": "(string)"
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