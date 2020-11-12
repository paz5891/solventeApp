[RETORNO](../README.md)
## **ENDPOINT**: ControllerLogin (POST)

**DESCRIPCION**: este servira para poder iniciar sesion como cobrador

**RUTA**:http://138.197.209.109:3000/api/session/debtcollector

**VALORES RECIBIDOS**
- **metodo**: POST
- **username**: (string)
- **password**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "username": "(string)",
      "password": "(string)"
  }
}
```

**VALORES DE RETORNO LOGIN CORRECT**
- **code**: (int)
- **message**: (string)
- **id_user**: (int)
    
**FORMATO JSON DE RETORNO**
```json
{
  "body":[
    {
      "id_user":"(int)",
      "message":"ACCESS LOGIN CORRECT",
    }
  ]
}
```

**VALORES DE RETORNO LOGIN INCORRECT**
- **code**: (int)
- **id_user**: null
- **message**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "body":[
    {
      "id_user":null,
      "message":"ERROR LOGIN USERNAME AND/OR PASSWORD INCORRECT",
    }
  ]
}
```

[RETORNO](../README.md)