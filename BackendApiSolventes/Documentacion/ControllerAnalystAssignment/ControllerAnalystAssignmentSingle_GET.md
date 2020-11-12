[RETORNO](../README.md)

## **ENDPOINT**: ControllerAnalystAssignment (GET)

**DESCRIPCION**: este servira para obtener un registro de asignacion de analista a poliza

**RUTA**:http://138.197.209.109:3000/api/analystassignment/:id_policy/policy

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_policy**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_policy": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
- **id_analyst_assignment**: (int)
- **id_policy**: (int)
- **id_user**: (int)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **status**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
        "id_analyst_assignment": "(int)",
        "id_policy": "(int)",
        "id_user": "(int)",
        "first_name": "(string)",
        "second_name": "(string)",
        "first_surname": "(string)",
        "second_surname": "(string)",
        "status": "(string)"  
      },
      ...
  ]
}
```
[RETORNO](../README.md)