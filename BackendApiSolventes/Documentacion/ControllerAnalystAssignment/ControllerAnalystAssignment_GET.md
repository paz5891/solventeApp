[RETORNO](../README.md)

## **ENDPOINT**: ControllerAnalystAssignment (GET)

**DESCRIPCION**: este servira para obtener todos los registros de asignacion de analista a poliza

**RUTA**:http://138.197.209.109:3000/api/analystassignment

**VALORES RECIBIDOS**
- **metodo**: GET
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{}
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