[RETORNO](../README.md)

## **ENDPOINT**: ControllerPaymentStatusCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de los estados de un pago

**RUTA**:http://138.197.209.109:3000/api/policystatuscatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_payment_status**: (int)
- **payment_status**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_payment_status":"(int)",
      "payment_status": "(string)"
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)