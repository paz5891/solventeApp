[RETORNO](../README.md)

## **ENDPOINT**: ControllerAddressCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de catalogo de direccion

**RUTA**:http://138.197.209.109:3000/api/addresscatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **type_address**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
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
  "message":"CREATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)