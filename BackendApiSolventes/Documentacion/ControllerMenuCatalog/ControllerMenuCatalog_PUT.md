[RETORNO](../README.md)

## **ENDPOINT**: ControllerMenuCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de catalogo de menus

**RUTA**:http://138.197.209.109:3000/api/menucatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_menu**: (int)
- **menu**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_menu":"(int)",
      "menu": "(string)"
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