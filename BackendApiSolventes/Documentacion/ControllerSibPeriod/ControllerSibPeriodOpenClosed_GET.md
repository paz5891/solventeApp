[RETORNO](../README.md)

## **ENDPOINT**: ControllerSibPeriod(GET)

**DESCRIPCION**: este servira para mostrar si un registro del periodo del sib esta abierto o cerrado

**RUTA**:http://138.197.209.109:3000/api/sibperiod/sibperiodopenclosed

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_sib_period**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_sib_period": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
- **disabled**: (bit)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "disabled": "(bit)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)