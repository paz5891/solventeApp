[RETORNO](../README.md)
## **ENDPOINT**: ControllerPolicy (DELETE)

**DESCRIPCION**: este servira para anular una poliza por el usuario del sistema

**RUTA**:http://138.197.209.109:3000/api/policy/:id_policy

**VALORES RECIBIDOS**
- **metodo**: DELETE   
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
- **message**: (string)

    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"DELETED SUCCESSFULLY",
  "body":[

  ]
}

```
[RETORNO](../README.md)