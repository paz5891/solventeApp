[RETORNO](../README.md)

## **ENDPOINT**: ControllerPaymentRequirements (GET)

**DESCRIPCION**: este servira para obtener un requerimiento de pago de una poliza

**RUTA**:http://138.197.209.109:3000/api/paymentrequirements/:id_policy/policy

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
- **message** (string)
- **id_payment_requirements**: (int)
- **correlative**: (int)
- **id_policy**: (int)
- **id_requirement_status**:(int)
- **requirement_status**:(string)
- **id_user_creator_requirement**: (int)
- **user_creator_requirements**: (string)
- **id_user_payment_requirements**: (int)
- **user_payment_requirements**: (string)
- **request_date**: (Datetime)
- **expiration_date**: (Date)
- **prima_pending_payment**: (Decimal)
- **iva**: (Decimal)
- **emission_rights**: (Decimal)
- **surcharge**: (Decimal)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {  
        "id_payment_requirements": "(int)",
        "correlative": "(int)",
        "id_policy": "(int)",
        "id_requirement_status": "(int)",
        "requirement_status": "(string)",
        "id_user_creator_requirement": "(int)",
        "user_creator_requirements": "(string)",
        "id_user_payment_requirements": "(int)",
        "user_payment_requirements": "(string)",
        "request_date": "(Datetime)",
        "expiration_date": "(Date)",
        "prima_pending_payment": "(Decimal)",
        "iva": "(Decimal)",
        "emission_rights": "(Decimal)",
        "surcharge": "(Decimal)"  
      },
      ...
  ]
}
```
[RETORNO](../README.md)