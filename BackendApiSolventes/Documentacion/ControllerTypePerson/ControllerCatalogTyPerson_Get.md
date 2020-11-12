[RETORNO](../README.md)
## **ENDPOINT**: ControllerTypePerson (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de TypePerson

**RUTA**:http://138.197.209.109:3000/api/typepersoncatalog

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
- **id_type_person**: (int)
- **type_person**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_type_person": "(int)",
          "type_person": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)