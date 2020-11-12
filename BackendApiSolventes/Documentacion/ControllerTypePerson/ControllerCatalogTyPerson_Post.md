[RETORNO](../README.md)

## **ENDPOINT**: ControllerTypePerson (POST)

**DESCRIPCION**: este servira para crear un nuevo registro del catalogo de TypePerson

**RUTA**:http://138.197.209.109:3000/api/typepersoncatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **type_person**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "type_person": "(string)"
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