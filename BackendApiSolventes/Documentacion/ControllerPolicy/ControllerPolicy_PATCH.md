[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicy (PATCH)

**DESCRIPCION**: este servira para cambiar el estado de una poliza

**RUTA**:http://138.197.209.109:3000/api/policy/changestate

**VALORES RECIBIDOS**
- **metodo**: PATCH   
- **id_policy**: (int)
- **id_policy_status**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
      "id_policy": "(int)",
      "id_policy_status": "(int)"
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
  "message":"UPDATED POLICY STATUS SUCCESSFULLY",
  "body":[

  ]
}

```
[RETORNO](../README.md)