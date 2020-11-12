[RETORNO](../README.md)

## **ENDPOINT**: ControllerPhoneCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro de catalogo de telefono

**RUTA**:http://138.197.209.109:3000/api/phonecatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_phone_catalog**: (int)
- **type_phone**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_phone_catalog":"(int)",
      "type_phone": "(string)"
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