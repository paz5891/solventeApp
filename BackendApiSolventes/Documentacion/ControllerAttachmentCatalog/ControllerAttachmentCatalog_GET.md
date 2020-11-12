[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de adjunto

**RUTA**:http://138.197.209.109:3000/api/attachmentcatalog

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
- **id_attachment_catalog** :(int)
- **attachment**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_attachment_catalog": "(int)",
          "attachment": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)