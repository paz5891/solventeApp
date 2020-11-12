[RETORNO](../README.md)

## **ENDPOINT**: ControllerRolMenu (GET)

**DESCRIPCION**: este servira para obtener todos los menus de un rol cuando inicia sesion

**RUTA**:http://138.197.209.109:3000/api/rolmenu/:id_rol/:id_person

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_rol**: (int)
- **id_person**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_rol": "(int)",
    "id_person": "(int)"
  }
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