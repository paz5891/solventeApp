[RETORNO](../README.md)
## **ENDPOINT**: ControllerMunicipalityCatalog (GET)

**DESCRIPCION**: Este servira para obtener todos los elementos del catalogo de Municipio

**RUTA**:http://138.197.209.109:3000/api/municipalitycatalog/:id_department

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_department**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_department": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
- **id_municipality** :(int)
- **municipality**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_municipality": "(int)",
          "municipality": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)