[RETORNO](../README.md)

## **ENDPOINT**: ControllerBouquetTypeCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro del catalogo de tipo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet_type

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_bouquet_type**: (int)
- **id_bouquet**: (int)
- **bouquet_type**: (String)
-
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_bouquet_type": "(int)",
      "id_bouquet":"(int)",
      "bouquet_type":"(Sting)"
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