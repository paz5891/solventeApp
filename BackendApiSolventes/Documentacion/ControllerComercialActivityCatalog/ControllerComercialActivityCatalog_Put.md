[RETORNO](../README.md)

## **ENDPOINT**: ControllerComercialActivityCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro del catalogo de ComercialActivity

**RUTA**:http://138.197.209.109:3000/api/comercialactivitycatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id**: (int)
- **comercial_activity**: (String)
-
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id":"(int)",
      "comercial_activity":"(Sting)"
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)