[RETORNO](../README.md)

## **ENDPOINT**: ControllerComercialActivityCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro del catalogo de ComercialActivity

**RUTA**:http://138.197.209.109:3000/api/comercialactivitycatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **comercial_activity**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "comercial_activity": "(string)"
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