[RETORNO](../README.md)

## **ENDPOINT**: ControllerComercialActivityCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de ComercialActivity

**RUTA**:http://138.197.209.109:3000/api/comercialactivitycatalog

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
- **id_comercial_activity"**: (int)
- **comercial_activity**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_comercial_activity": "(int)",
          "comercial_activity": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)