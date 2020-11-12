[RETORNO](../README.md)

## **ENDPOINT**: ControllerPaymentStatusCatalog (DELETE)

**DESCRIPCION**: este servira para eliminar un registro estado de un pago

**RUTA**:http://138.197.209.109:3000/api/paymentstatuscatalog/:id

**VALORES RECIBIDOS**
- **metodo**: DELETE
- **id**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"DELETE",
  "message":"",
  "body":{
      "id":"(int)"
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