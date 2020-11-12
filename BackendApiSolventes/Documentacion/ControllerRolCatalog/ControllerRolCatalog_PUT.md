[RETORNO](../README.md)

## **ENDPOINT**: ControllerRolCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de rol especifico

**RUTA**:http://138.197.209.109:3000/api/rolcatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_rol**: (int)
- **rol**: (string)

    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_rol":"(int)",
      "rol":"(string)"     
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)