[RETORNO](../README.md)

## **ENDPOINT**: ControllerPhone (POST)

**DESCRIPCION**: este servira para crear un nuevo telefono de una persona

**RUTA**:http://138.197.209.109:3000/api/phone

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_person**: (int)
- **id_phone_catalog**: (int)
- **phone**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_person": "(int)",
      "id_phone_catalog": "(int)",
      "phone": "(string)"
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