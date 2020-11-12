[RETORNO](../README.md)

## **ENDPOINT**: ControllerPaymentStatusCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los estados de los pagos

**RUTA**:http://138.197.209.109:3000/api/paymentstatuscatalog

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
- **id_payment_status**: (int)
- **payment_status**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_payment_status": "(int)",
          "payment_status": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)