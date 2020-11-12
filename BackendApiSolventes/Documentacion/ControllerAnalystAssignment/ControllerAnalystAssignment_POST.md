[RETORNO](../README.md)

## **ENDPOINT**: ControllerAnalystAssignment (POST)

**DESCRIPCION**: este servira para crear un registro de asignacion de analista a poliza

**RUTA**:http://138.197.209.109:3000/api/analystassignment

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_policy** : (int)
- **id_user**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_policy": "(int)",
      "id_user": "(int)",
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