[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicy (PATCH)

**DESCRIPCION**: este servira para cambiar el estado de una poliza a "Revisado realizar cambios"

**RUTA**:http://138.197.209.109:3000/api/policy/changestaterevisionandfix

**VALORES RECIBIDOS**
- **metodo**: PATCH   
- **id_policy**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PATCH",
  "message":"",
  "body":{
      "id_policy": "(int)",
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
  "message":"UPDATED POLICY STATUS Revisado realizar cambios SUCCESSFULLY",
  "body":[

  ]
}

```
[RETORNO](../README.md)