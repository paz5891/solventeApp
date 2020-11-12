[RETORNO](../README.md)

## **ENDPOINT**: ControllerPaymentRequirements (POST)

**DESCRIPCION**: este servira para crear un requerimiento de pago de una poliza
**RUTA**:http://138.197.209.109:3000/api/paymentrequirements

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_policy**: (int)
- **id_user_creator_requirement**: (int)
- **date_of_first_payment**: (date)
- **validity**: (int)
- **prima**: (decimal(10,2))

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_policy": "(int)",
      "id_user_creator_requirement": "(int)",
      "date_of_first_payment": "(date)",
      "validity": "(int)",
      "prima": "(decimal(10,2))"

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