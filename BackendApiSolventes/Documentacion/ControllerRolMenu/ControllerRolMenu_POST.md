[RETORNO](../README.md)

## **ENDPOINT**: ControllerRolMenu (POST)

**DESCRIPCION**: este servira para asignar un menu a un rol especifico

**RUTA**:http://138.197.209.109:3000/api/rolmenu

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_menu**: (int)
- **id_rol**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_menu": "(int)",
      "id_rol": "(int)"
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