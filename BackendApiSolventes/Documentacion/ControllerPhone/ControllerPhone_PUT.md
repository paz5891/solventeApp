[RETORNO](../README.md)

## **ENDPOINT**: ControllerPhone (PUT)

**DESCRIPCION**: este servira para actualizar un telefono de una persona

**RUTA**:http://138.197.209.109:3000/api/phone

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_phone**: (int)
- **id_person**: (int)
- **id_phone_catalog**: (int)
- **phone**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_phone":"(int)",
      "id_person": "(int)",
      "id_phone_catalog":"(int)",
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)