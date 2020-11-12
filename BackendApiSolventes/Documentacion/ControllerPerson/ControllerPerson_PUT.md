[RETORNO](../README.md)

## **ENDPOINT**: ControllerPerson (PUT)

**DESCRIPCION**: este servira para actualizar una persona

**RUTA**:http://138.197.209.109:3000/api/person

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_person**: (int)
- **id_rol**: (int)
- **id_municipality**: (int)
- **id_type_person**: (int)
- **id_comercial_activity**: (int)
- **nit**: (string)
- **cui**: (string)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **date_of_birth**: (date)
- **businness_name**: (string)
- **constitution_date**: (date)
- **commercial_patent_number**: (string)
- **email**: (string)
- **avatar**: (string:url)
- **sexo**: (Char M || F)

## nota
aparte se debe de colocar un input file con nombre **avatar_file** para realizar el cambio en la base de datos, y el campo del avatar ira la url del actual avatar

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_person":"(int)",
      "id_rol": "(int)",
      "id_municipality":"(int)",
      "id_type_person": "(int)",
      "id_comercial_activity":"(int)",
      "nit": "(string)",
      "cui":"(string)",
      "first_name": "(string)",
      "second_name":"(string)",
      "first_surname": "(string)",
      "second_surname":"(string)",
      "date_of_birth": "(date)",
      "businness_name":"(string)",
      "constitution_date": "(date)",
      "commercial_patent_number":"(string)",
      "email": "(string)",
      "avatar":"(string:url)",
      "sexo":"(Char M || F)"
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)