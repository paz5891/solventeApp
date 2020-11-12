[RETORNO](../README.md)

## **ENDPOINT**: ControllerUserSystem (GET)

**DESCRIPCION**: este servira para obtener un usuario del sistema

**RUTA**:http://138.197.209.109:3000/api/usersystem/:id_user

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_user**: (int)
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_user" : "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code** : (int)
- **message** : (string)
- **id_user**: (int)
- **rol**: (string)
- **username** :(string)
- **id_person** :(int)
- **department** :(string)
- **municipality** :(string)
- **nit** :(string)
- **cui** :(string)
- **first_name** :(string)
- **second_name** :(string)
- **first_surname** :(string)
- **second_surname** :(string)
- **date_of_birth** :(date)
- **email** :(string)
- **avatar** :(string:url)
- **sexo** :(Char M || F)
- **disabled** :(bit)


**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      {
        "id_user" : "(int)",
        "rol": "(string)",
        "username": "(string)",
        "id_person" : "(int)",
        "department" : "(string)",
        "municipality" :"(string)",
        "nit" : "(string)",
        "cui" : "(string)",
        "first_name" : "(string)",
        "second_name" : "(string)",
        "first_surname" : "(string)",
        "second_surname" : "(string)",
        "date_of_birth" : "(date)",
        "email" : "(string)",
        "avatar" : "(string:url)",
        "sexo" : "(Char M || F)",
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
