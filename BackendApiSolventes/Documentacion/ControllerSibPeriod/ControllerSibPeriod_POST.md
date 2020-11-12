[RETORNO](../README.md)

## **ENDPOINT**: ControllerSibPeriod(POST)

**DESCRIPCION**: este servira para crear un registro del periodo del sib

**RUTA**:http://138.197.209.109:3000/api/sibperiod

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_sib_period**: (int)
- **end_date**: (date)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_sib_period": "(int)",
      "end_date": "(date)"
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