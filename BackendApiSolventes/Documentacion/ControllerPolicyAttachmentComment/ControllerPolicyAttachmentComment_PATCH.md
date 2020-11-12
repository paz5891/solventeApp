[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicyAttachmentComment (PATCH)

**DESCRIPCION**: este servira para actualizar el estado  un registro de catalogo de Comentario de una poliza

**RUTA**:http://138.197.209.109:3000/api/policycommentattachment/:id_comment

**VALORES RECIBIDOS**
- **metodo**: PATCH
- **id_comment**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PATCH",
  "message":"",
  "body":{
      "id_commentary":"(int)"
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
  "message":"UPDATED STATUS COMMENT SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)