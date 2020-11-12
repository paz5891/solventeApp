[RETORNO](../README.md)
## **ENDPOINT**: ControllerBouquetTypeCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de tipo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet_type/:id_bouquet

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_bouquet**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_bouquet": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
- **id_bouquet_type**: (int)
- **id_bouquet"**: (int)
- **bouquet_type**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_bouquet_type": "(string)",
          "id_bouquet": "(int)",
          "bouquet_type": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)