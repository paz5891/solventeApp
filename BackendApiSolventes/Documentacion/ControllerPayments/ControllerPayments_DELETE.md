[RETORNO](../README.md)
## **ENDPOINT**: ControllerPayments (DELETE)

**DESCRIPCION**: este servira para anular el pago de un requerimiento

**RUTA**:http://138.197.209.109:3000/api/payments/:id_payments

**VALORES RECIBIDOS**
- **metodo**: DELETE   
- **id_payments**: (int)
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
      "id_payments": "(int)"
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