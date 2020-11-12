[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentCatalogPolicy (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de catalogo de adjunto de las polizas

**RUTA**:http://138.197.209.109:3000/api/attachmentcatalogpolicy

**VALORES RECIBIDOS**
- **metodo**: POST
- **attachment_catalog_policy**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "attachment_catalog_policy": "(string)"
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