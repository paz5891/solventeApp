[RETORNO](../README.md)

## **ENDPOINT**: ControllerPhone (GET)

**DESCRIPCION**: este servira para obtener todos los telefonos de una persona

**RUTA**:http://138.197.209.109:3000/api/phone/:id_person

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
- **id_phone**: (int)
- **phone**: (string)
- **type_phone**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_phone": "(int)",
          "phone": "(string)",
          "type_phone": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)