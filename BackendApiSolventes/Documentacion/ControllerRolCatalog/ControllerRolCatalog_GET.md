[RETORNO](../README.md)

## **ENDPOINT**: ControllerRolCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los registros de rol

**RUTA**:http://138.197.209.109:3000/api/rolcatalog

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
- **id_rol**: (int)
- **rol**: (int)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_rol": "(int)",
          "rol": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)