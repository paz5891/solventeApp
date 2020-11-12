[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicyComment (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de comentario de una poliza

**RUTA**:http://138.197.209.109:3000/api/policycomment/:id_policy

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_policy** : (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_policy": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code** : (int)
- **message** : (string)
- **id_comment**: (int)
- **id_policy**: (int)
- **id_user**: (int)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **comment**: (string)
- **creation_date**: (datetime)
- **check**: (bit)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
        "id_comment": "(int)",
				"id_policy": "(int)",
				"id_user": "(int)",
				"first_name": "(string)",
				"second_name": "(string)",
				"first_surname": "(string)",
        "second_surname": "(string)",
        "comment": "(string)",
				"creation_date": "(datetime)",
				"check": "(bit)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)