[RETORNO](../README.md)

## **ENDPOINT**: ControllerAddressCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de catalogo de direccion

**RUTA**:http://138.197.209.109:3000/api/addresscatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_address_catalog**: (int)
- **type_address**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_address_catalog":"(int)",
      "type_address": "(string)"
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