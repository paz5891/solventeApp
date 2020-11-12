[RETORNO](../README.md)

## **ENDPOINT**: ControllerTypePerson (PUT)

**DESCRIPCION**: este servira para actualizar un registro del catalogo de TypePerson

**RUTA**:http://138.197.209.109:3000/api/typepersoncatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_type_person**: (int)
- **type_person**: (String)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_type_person":"(int)",
      "type_person":"(String)"
 
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