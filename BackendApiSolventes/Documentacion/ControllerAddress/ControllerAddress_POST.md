[RETORNO](../README.md)

## **ENDPOINT**: ControllerAddress(POST)

**DESCRIPCION**: este servira para crear una direccion de una persona

**RUTA**:http://138.197.209.109:3000/api/address

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_person**: (int)
- **id_address_catalog**: (int)
- **address**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "id_person": "(int)",
      "id_address_catalog": "(int)",
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
  "message":"CREATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)