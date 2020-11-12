[RETORNO](../README.md)

## **ENDPOINT**: ControllerPaymentStatusCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de un estado de un pago

**RUTA**:http://138.197.209.109:3000/api/paymentstatuscatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **payment_status**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "policy_status": "(string)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"CREATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)