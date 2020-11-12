[RETORNO](../README.md)

## **ENDPOINT**: ControllerRolMenu (GET)

**DESCRIPCION**: este servira para obtener todos los elementos de los menus que asignaron a cada rol

**RUTA**:http://138.197.209.109:3000/api/rolmenu

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
- **id_rol_menu**: (int)
- **id_rol**: (int)
- **id_menu**: (int)
- **menu**: (string)
- **rol**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_rol_menu": "(int)",
          "id_rol": "(int)",
          "id_menu": "(int)",
          "menu": "(string)",
          "rol": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)