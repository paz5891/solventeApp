[RETORNO](../README.md)

## **ENDPOINT**: ControllerAnalystAssignment (PUT)

**DESCRIPCION**: este servira para actualizar un registro de asignacion de analista a poliza

**RUTA**:http://138.197.209.109:3000/api/analystassignment

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_analyst_assignment**: (int)
- **status**: (string)
- **id_user**: (int)
- **id_policy**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_analyst_assignment": "(int)",
      "status":"(string)",
      "id_user": "(int)",
      "id_policy": "(int)"
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