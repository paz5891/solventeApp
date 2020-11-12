[RETORNO](../README.md)

## **ENDPOINT**: ControllerBeneficiaryAssignment (DELETE)

**DESCRIPCION**: este servira para eliminar un registro de asignacion de beneficiario a poliza por el id de beneficiario y el id de poliza

**RUTA**:http://138.197.209.109:3000/api/beneficiaryassignment/:id_beneficiary/:id_policy

**VALORES RECIBIDOS**
- **metodo**: DELETE
- **id_beneficiary** : (int)
- **id_policy**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"DELETE",
  "message":"",
  "body":{
      "id_beneficiary":"(int)",
      "id_policy":"(int)"
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
  "body":[]
}
```

 [RETORNO](../README.md);