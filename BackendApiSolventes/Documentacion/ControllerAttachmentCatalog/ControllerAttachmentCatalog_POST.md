[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de catalogo de adjunto

**RUTA**:http://138.197.209.109:3000/api/attachmentcatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **attachment**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "attachment": "(string)"
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