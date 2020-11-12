[RETORNO](../README.md)

## **ENDPOINT**: ControllerBeneficiaryAssignment (GET)

**DESCRIPCION**: este servira para obtener un registro de asignacion de beneficiario a poliza por el id de poliza

**RUTA**:http://138.197.209.109:3000/api/beneficiaryassignment/:id_policy/policy

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
- **id_beneficiary**: (int)
- **id_person**: (int)
- **rol**: (string)
- **department**: (string)
- **municipality**: (string)
- **type_person**: (string)
- **comercial_activity**: (string)
- **nit**: (string)
- **cui**: (string)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **date_of_birth**: (date)
- **business_name**: (string)
- **constitution_date**: (date)
- **commercial_patent_number**: (string)
- **email**: (string)
- **avatar**: (string:url)
- **sexo** : (char M || F)
- **disabled**: (bit)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_beneficiary": "(int)",
          "id_person": "(int)",
          "rol": "(string)",
          "department": "(string)",
          "municipality": "(string)",
          "type_person": "(string)",
          "comercial_activity": "(string)",
          "nit": "(string)",
          "cui": "(string)",
          "first_name": "(string)",
          "second_name": "(string)",
          "first_surname":"(string)",
          "second_surname":"(string)",
          "date_of_birth": "(date)",
          "business_name": "(string)",
          "constitution_date": "(date)",
          "commercial_patent_number": "(string)",
          "email": "(string)",
          "avatar": "(string:url)",
          "sexo": "(char M || F)",
          "disabled": "(bit)" 
      },
      ...
  ]
}
```
[RETORNO](../README.md)