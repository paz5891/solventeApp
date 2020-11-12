[RETORNO](../README.md)
## **ENDPOINT**: ControllerMunicipalityCatalog (PUT)

**DESCRIPCION**: Este servira para actualizar un registro del catalogo de Municipio

**RUTA**:http://138.197.209.109:3000/api/municipalitycatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_municipality**: (int)
- **id_department**: (int)
- **municipality**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_municipality":"(int)",
      "id_department": "(int)",
      "municipality": "(string)"
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