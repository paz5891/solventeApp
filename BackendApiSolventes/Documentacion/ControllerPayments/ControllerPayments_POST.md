[RETORNO](../README.md)

## **ENDPOINT**: ControllerPayments (POST)

**DESCRIPCION**: este servira para crear un registro de pago de un requerimiento
**RUTA**:http://138.197.209.109:3000/api/payments

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_payment_requirements**: (int)
- **id_type_payments**: (int)
- **id_user_payments**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_payment_requirements": "(int)",
      "id_type_payments": "(int)",
      "id_user_payments": "(int)"
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
