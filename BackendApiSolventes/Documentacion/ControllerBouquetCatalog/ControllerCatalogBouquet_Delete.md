[RETORNO](../README.md)

## **ENDPOINT**: ControllerBouquet (DELETE)

**DESCRIPCION**: este servira para eliminar un registro del catalogo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet/:id

**VALORES RECIBIDOS**
- **metodo**: DELETE
- **id**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"DELETE",
  "message":"",
  "body":{
    "id":"(int)"
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
  "message":"DELETED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)