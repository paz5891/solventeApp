[RETORNO](../README.md)
## **ENDPOINT**: ControllerPolicy (GET)

**DESCRIPCION**: este servira para obtener el estado de la poliza (cuantos pagos ha realizado y cuantos hacen falta)

**RUTA**:http://138.197.209.109:3000/api/policy/statepolicy/payment

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
- **id_payments**: (int)
- **id_payment_requirements**: (int)
- **prima_pending_payment**: (DECIMAL(10,2))
- **iva**: (DECIMAL(10,2))
- **emission_rights**:  (DECIMAL(10,2))
- **surcharge**: (DECIMAL(10,2))
- **expiration_date**: (date)
- **id_type_payments**: (int)
- **id_type_payments**: (int)
- **id_payment_status**: (int)
- **payment_status** : (string)
- **id_user_payments**: (string)
- **user_payments**: (int)
- **amount**:  (DECIMAL(10,2))
- **payment_date**: (date)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      {
          "id_policy": "(int)",
          "id_payments": "(int)",
          "id_payment_requirements": "(int)",
          "prima_pending_payment": "(DECIMAL(10,2))",
          "iva": "(DECIMAL(10,2))",
          "emission_rights": "(DECIMAL(10,2))",
          "surcharge": "(DECIMAL(10,2))",
          "expiration_date": "(DECIMAL(10,2))",
          "id_type_payments" : "(int)",
          "id_type_payments": "(int)",
          "id_payment_status": "(int)",
          "payment_status" : "(string)",
          "id_user_payments" : "(int)",
          "user_payments": "(string)",
          "amount" : "(DECIMAL(10,2))",
          "payment_date": "Date"
      }
  ]
}

```
[RETORNO](../README.md)