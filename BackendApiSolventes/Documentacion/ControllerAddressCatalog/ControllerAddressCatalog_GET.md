[RETORNO](../README.md)

## **ENDPOINT**: ControllerAddressCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de direccion

**RUTA**:http://138.197.209.109:3000/api/addresscatalog

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
- **id_address_catalog**: (int)
- **type_address**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_address_catalog": "(int)",
          "type_address": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)