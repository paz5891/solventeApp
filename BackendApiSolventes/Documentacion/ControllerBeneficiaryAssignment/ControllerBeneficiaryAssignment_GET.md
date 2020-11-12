[RETORNO](../README.md)

## **ENDPOINT**: ControllerBeneficiaryAssignment (GET)

**DESCRIPCION**: este servira para obtener todos los registros de asignacion de beneficiario a poliza

**RUTA**:http://138.197.209.109:3000/api/beneficiaryassignment

**VALORES RECIBIDOS**
- **metodo**: GET
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{}
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