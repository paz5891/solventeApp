[RETORNO](../README.md)

## **ENDPOINT**: ControllerRolMenu (PUT)

**DESCRIPCION**: este servira para actualizar un menu de un rol especifico

**RUTA**:http://138.197.209.109:3000/api/rolmenu

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id**: (int)
- **id_menu**: (int)
- **id_rol**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id":"(int)",
      "id_menu":"(int)",
      "id_rol":"(int)"      
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