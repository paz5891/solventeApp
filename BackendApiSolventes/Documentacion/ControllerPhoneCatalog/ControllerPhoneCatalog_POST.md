[RETORNO](../README.md)

## **ENDPOINT**: ControllerPhoneCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro de catalogo de telefono

**RUTA**:http://138.197.209.109:3000/api/phonecatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **type_phone**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
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
  "message":"CREATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)