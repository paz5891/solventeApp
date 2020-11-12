[RETORNO](../README.md)

## **ENDPOINT**: ControllerTrust (DELETE)

**DESCRIPCION**: este servira para habilitar y deshabilitar una Fiado

**RUTA**:http://138.197.209.109:3000/api/trust/:id

**VALORES RECIBIDOS**
- **metodo**: DELETE
- **id**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"DELETE",
  "message":"",
  "body":{
      "id":"(int)"
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
  "message":"DELETED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)