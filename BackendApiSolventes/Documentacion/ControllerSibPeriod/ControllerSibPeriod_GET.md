[RETORNO](../README.md)

## **ENDPOINT**: ControllerSibPeriod(GET)

**DESCRIPCION**: este servira para mostrar todos los registros del periodo del sib

**RUTA**:http://138.197.209.109:3000/api/sibperiod

**VALORES RECIBIDOS**
- **metodo**: GET
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
  }
}
```
**VALORES DE RETORNO**
- **code** : (int)
- **message** : (string)
- **id_sib_period**: (int)
- **end_date**: (date)
- **date_open**: (date)
- **date_closed**: (date)
- **id_user_open**: (int)
- **first_name_user_open**: (string)
- **second_name_user_open**: (string)
- **first_surname_user_open**: (string)
- **second_surname_user_open**: (string)
- **id_user_closed**: (int)
- **first_name_user_closed**: (string)
- **second_name_user_closed**: (string)
- **first_surname_user_closed**: (string)
- **second_surname_user_closed**: (string)
- **disabled**: (bit)

**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
        "id_sib_period": "(int)",
        "end_date": "(date)",
        "date_open": "(date)",
        "date_closed": "(date)",
        "id_user_open": "(int)",
        "first_name_user_open": "(string)",
        "second_name_user_open": "(string)",
        "first_surname_user_open": "(string)",
        "second_surname_user_open": "(string)",
        "id_user_closed": "(int)",
        "first_name_user_closed": "(string)",
        "second_name_user_closed": "(string)",
        "first_surname_user_closed": "(string)",
        "second_surname_user_closed": "(string)",
        "disabled": "(bit)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)