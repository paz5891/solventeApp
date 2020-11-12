[RETORNO](../README.md)

## **ENDPOINT**: ControllerBeneficiaryAssignment (GET)

**DESCRIPCION**: este servira para obtener un registro de asignacion de beneficiario a poliza por el id de beneficiario

**RUTA**:http://138.197.209.109:3000/api/beneficiaryassignment/:id_beneficiary/beneficiary

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_beneficiary**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_beneficiary": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
- **id_policy**: (int)
- **id_beneficiary**: (int)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **business_name**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
        "id_policy": "(int)",
        "id_beneficiary": "(int)",
        "first_name": "(string)",
        "second_name": "(string)",
        "first_surname": "(string)",
        "second_surname": "(string)",
        "business_name": "(string)"  
      },
      ...
  ]
}
```
[RETORNO](../README.md)