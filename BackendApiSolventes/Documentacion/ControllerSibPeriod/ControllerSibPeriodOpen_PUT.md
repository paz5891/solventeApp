[RETORNO](../README.md)

## **ENDPOINT**: ControllerSibPeriod(PUT)

**DESCRIPCION**: este servira para abrir el periodo del sib

**RUTA**:http://138.197.209.109:3000/api/sibperiod/sibperiodopen

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_sib_period**: (int)
- **id_user_open**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_sib_period": "(int)",
      "id_user_open": "(int)"
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
  "message":"UPDATED (OPENED) SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)