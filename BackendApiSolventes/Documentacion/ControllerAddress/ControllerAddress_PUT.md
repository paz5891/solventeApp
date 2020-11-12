[RETORNO](../README.md)

## **ENDPOINT**: ControllerAddress (PUT)

**DESCRIPCION**: este servira para actualizar una direccion de una persona

**RUTA**:http://138.197.209.109:3000/api/address

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_address**: (int)
- **id_person**: (int)
- **id_address_catalog**: (int)
- **address**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_address":"(int)",
      "id_person": "(int)",
      "id_address_catalog":"(int)",
      "address": "(string)"
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