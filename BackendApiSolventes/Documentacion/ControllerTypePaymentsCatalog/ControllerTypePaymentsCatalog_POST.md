[RETORNO](../README.md)

## **ENDPOINT**: ControllerTypePaymentsCatalog (POST)

**DESCRIPCION**: este servira para crear un registro de tipo de pago

**RUTA**:http://138.197.209.109:3000/api/typepaymentscatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **type_payments**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "type_payments": "(string)"
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