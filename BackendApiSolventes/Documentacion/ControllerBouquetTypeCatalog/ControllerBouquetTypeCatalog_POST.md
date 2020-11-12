[RETORNO](../README.md)

## **ENDPOINT**: ControllerBouquetTypeCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro del catalogo de tipo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet_type

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_bouquet**: (int)
- **bouquet_type**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_bouquet": "(int)",
      "bouquet_type": "(string)"
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