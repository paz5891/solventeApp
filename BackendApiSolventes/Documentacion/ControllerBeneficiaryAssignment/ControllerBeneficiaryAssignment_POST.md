[RETORNO](../README.md)

## **ENDPOINT**: ControllerBeneficiaryAssignment (POST)

**DESCRIPCION**: este servira para crear un registro de asignacion de beneficiario a poliza

**RUTA**:http://138.197.209.109:3000/api/beneficiaryassignment

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_beneficiary** : (int)
- **id_policy**: (int)

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_beneficiary": "(int)",
      "id_policy": "(int)",
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