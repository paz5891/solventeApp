[RETORNO](../README.md)
## **ENDPOINT**: ControllerMenuCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de menu

**RUTA**:http://138.197.209.109:3000/api/menucatalog

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
- **id_menu**: (int)
- **menu**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_menu": "(int)",
          "menu": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)