[RETORNO](../README.md)

## **ENDPOINT**: ControllerTypePaymentsCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de tipo de pago especifico

**RUTA**:http://138.197.209.109:3000/api/typepaymentscatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_type_payments**: (int)
- **type_payments**: (string)

    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_type_payments":"(int)",
      "type_payments":"(string)"     
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)