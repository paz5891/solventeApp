[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicyAttachmentComment (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de catalogo comentario de una poliza

**RUTA**:http://138.197.209.109:3000/api/policycommentattachment

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_policy**: (int)
- **id_user**: (int)
- **id_attachment_policy**: (int)
- **comment**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_policy": "(int)",
      "id_user": "(int)",
      "id_attachment_policy": "(int)",
      "comment": "(string)"
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