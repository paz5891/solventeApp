[RETORNO](../README.md)

## **ENDPOINT**: ControllerAddress(GET)

**DESCRIPCION**: este servira para obtener todas la direccion de una persona

**RUTA**:http://138.197.209.109:3000/api/address/:id_person

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_person**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_person": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
- **id_person**: (int)
- **id_address**: (int)
- **address**: (string)
- **type_address**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_person": "(int)",
          "id_address": "(int)",
          "address": "(string)",
          "type_address": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)