[RETORNO](../README.md)

## **ENDPOINT**: ControllerTypePaymentsCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los registros de tipo de pago

**RUTA**:http://138.197.209.109:3000/api/typepaymentscatalog

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
- **message**: (string)
- **id_type_payments**: (int)
- **type_payments**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_type_payments": "(int)",
          "type_payments": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)