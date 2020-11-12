[RETORNO](../README.md)

## **ENDPOINT**: ControllerBeneficiary (POST)

**DESCRIPCION**: esta servira para crear un nuevo beneficiario, (convertir de persona a beneficiario)

**RUTA**:http://138.197.209.109:3000/api/beneficiary

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_person**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_person": "(int)"
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