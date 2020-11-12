[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachmentPolicy (PATCH)

**DESCRIPCION**: este servira para cambiar el estado de validacion de una adjunto de una poliza

**RUTA**:http://138.197.209.109:3000/api/attachmentpolicy/:id_attachment_policy

**VALORES RECIBIDOS**
- **metodo**: PATCH
- **id_attachment_policy**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_attachment_policy": "(int)"
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
  "message":"CHANGE CHECK ATTACHMENT SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)