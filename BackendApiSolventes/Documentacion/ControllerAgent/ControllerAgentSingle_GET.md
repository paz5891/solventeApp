[RETORNO](../README.md)

## **ENDPOINT**: ControllerAgent (GET)

**DESCRIPCION**: este servira para obtener un agente

**RUTA**:http://138.197.209.109:3000/api/agent/:id_agent

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_agent**: (int)
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
      "id_agent" : "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code** : (int)
- **message** : (string)
- **id_agent**: (int)
- **id_person** (int)
- **rol** :(string)
- **department** :(string)
- **municipality** :(string)
- **type_person** :(string)
- **comercial_activity** :(string)
- **nit** :(string)
- **cui** :(string)
- **first_name** :(string)
- **second_name** :(string)
- **first_surname** :(string)
- **second_surname** :(string)
- **date_of_birth** :(date)
- **business_name** :(string)
- **constitution_date** :(date)
- **commercial_patent_number** :(string)
- **email** :(string)
- **avatar** :(string:url)
- **sexo** : (char M || F)
- **disabled** :(bit)

**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      {
        "id_agent" : "(int)",
        "id_person": "(int)",
        "rol" : "(string)",
        "department" : "(string)",
        "municipality" :"(string)",
        "type_person" :"(string)",
        "comercial_activity" : "(string)",
        "nit" : "(string)",
        "cui" : "(string)",
        "first_name" : "(string)",
        "second_name" : "(string)",
        "first_surname" : "(string)",
        "second_surname" : "(string)",
        "date_of_birth" : "(date)",
        "business_name" : "(string)",
        "constitution_date" : "(date)",
        "commercial_patent_number" : "(string)",
        "email" : "(string)",
        "avatar" : "(string:url)",
        "sexo" : "(char M || F)",
        "disabled" : "(bit)"
      }
  ]
}
```

# NOTA
para obtener los telefonos utilizar el endpoint con el **id_person como parametro**

- [PHONE](../ControllerPhone/ControllerPhone_GET.md)

para obtener las direcciones utilizar el endpoint con el **id_person como parametro**

- [ADDRESS](../ControllerAddress/ControllerAddress_GET.md)

para obtener los adjuntos utilizar el endpoint con el **id_person como parametro**

- [Attachment](../ControllerAttachment/ControllerAttachment_GET.md)

[RETORNO](../README.md)