[RETORNO](../README.md)
## **ENDPOINT**: ControllerUserSystem (DELETE)

**DESCRIPCION**: Este servira para habilitar o deshabilitar a los usuarios del sistema

**RUTA**:http://138.197.209.109:3000/api/usersystem/:id

**VALORES RECIBIDOS**
- **metodo**: DELETE
- **id_user**: (int)

    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"DELETE",
  "message":"",
  "body":{
      "id_user":"(int)"
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
  "message":"DELETED SUCCESSFULLYY",
  "body":[]
}
```
[RETORNO](../README.md)