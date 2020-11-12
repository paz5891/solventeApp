[RETORNO](../README.md)

## **ENDPOINT**: ControllerUserSystem(POST)

**DESCRIPCION**: este servira para crear un nuevo usuario de sistema

**RUTA**:http://138.197.209.109:3000/api/usersystem

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_person**: (int)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **email**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_person": "(int)",
      "first_name": "(string)",
      "second_name": "(string)",
      "first_surname": "(string)",
      "second_surname": "(string)",
      "email": "(string)"
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