[RETORNO](../README.md)

## **ENDPOINT**: ControllerCommentaryCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de catalogo de Comentario

**RUTA**:http://138.197.209.109:3000/api/commentarycatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_commentary**: (int)
- **commentary**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_commentary":"(int)",
      "commentary": "(string)"
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