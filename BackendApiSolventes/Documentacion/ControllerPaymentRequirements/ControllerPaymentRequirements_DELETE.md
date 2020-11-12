[RETORNO](../README.md)
## **ENDPOINT**: ControllerPaymentRequirements (DELETE)

**DESCRIPCION**: este servira para anular un requerimiento de pago

**RUTA**:http://138.197.209.109:3000/api/paymentrequirements/:id_payment_requirements

**VALORES RECIBIDOS**
- **metodo**: DELETE   
- **id_payment_requirements**: (int)
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
      "id_payment_requirements": "(int)"
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