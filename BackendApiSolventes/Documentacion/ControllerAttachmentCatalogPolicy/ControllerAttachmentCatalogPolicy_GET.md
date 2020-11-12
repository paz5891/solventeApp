[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentCatalogPolicy (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de adjunto de las polizas

**RUTA**:http://138.197.209.109:3000/api/attachmentcatalogpolicy

**VALORES RECIBIDOS**
- **metodo**: GET
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{}
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
- **id_attachment_catalog_policy** :(int)
- **attachment_catalog_policy**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_attachment_catalog_policy": "(int)",
          "attachment_catalog_policy": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)