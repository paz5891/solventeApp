[RETORNO](../README.md)
## **ENDPOINT**: ControllerPolicy (GET)

**DESCRIPCION**: este servira para obtener una poliza con estado de emision activa

**RUTA**:http://138.197.209.109:3000/api/policy/:id_policy/activepolicy

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
- **message**: (string)
- **id_policy**: (int)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      {
          "id_policy": "(int)"
      }
  ]
}

```
[RETORNO](../README.md)