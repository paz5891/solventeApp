[RETORNO](../README.md)
## **ENDPOINT**: ControllerPerson (GET)

**DESCRIPCION**: este servira para obtener todos los datos de las personas

**RUTA**:http://138.197.209.109:3000/api/person

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
- **id_person**: (int)
- **rol**: (string)
- **department**: (string)
- **municipality**: (string)
- **type_person**: (string)
- **comercial_activity**: (string)
- **nit**: (string)
- **cui**: (string)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **date_of_birth**: (date)
- **business_name**: (string)
- **constitution_date**: (date)
- **commercial_patent_number**: (string)
- **email**: (string)
- **avatar**: (string:url)
- **sexo**: (Char M || F)
- **disabled**: (bit)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_person": "(int)",
          "rol": "(string)",
          "department": "(string)",
          "municipality": "(string)",
          "type_person": "(string)",
          "comercial_activity": "(string)",
          "nit": "(string)",
          "cui": "(string)",
          "first_name": "(string)",
          "second_name": "(string)",
          "first_surname":"(string)",
          "second_surname":"(string)",
          "date_of_birth": "(date)",
          "business_name": "(string)",
          "constitution_date": "(date)",
          "commercial_patent_number": "(string)",
          "email": "(string)",
          "avatar": "(string:url)",
          "sexo": "(Char M || F)",
          "disabled": "(bit)"
      }
      ...
  ]
}
```

# NOTA
para obtener los telefonos utilizar el endpoint

- [PHONE](../ControllerPhone/ControllerPhone_GET.md)

para obtener las direcciones utilizar el endpoint

- [ADDRESS](../ControllerAddress/ControllerAddress_GET.md)

para obtener los adjuntos utilizar el endpoint

- [Attachment](../ControllerAttachment/ControllerAttachment_GET.md)

[RETORNO](../README.md)