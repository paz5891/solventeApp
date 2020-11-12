[RETORNO](../README.md)

## **ENDPOINT**: ControllerCommentaryCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de catalogo comentario

**RUTA**:http://138.197.209.109:3000/api/commentarycatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_person**: (int)
- **commentary**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_person": "(int)",
      "commentary": "(string)"
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