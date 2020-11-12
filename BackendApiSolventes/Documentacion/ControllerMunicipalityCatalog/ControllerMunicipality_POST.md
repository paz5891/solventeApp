[RETORNO](../README.md)
## **ENDPOINT**: ControllerMunicipalityCatalog (POST)

**DESCRIPCION**: Este servira para crear un nuevo registro de catalogo de Municipio

**RUTA**:http://138.197.209.109:3000/api/municipalitycatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **municipality**: (string)
- **id_department**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "municipality": "(string)",
      "id_department": "(int)"
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