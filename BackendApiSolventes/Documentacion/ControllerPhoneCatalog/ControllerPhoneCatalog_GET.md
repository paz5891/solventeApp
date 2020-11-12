[RETORNO](../README.md)

## **ENDPOINT**: ControllerPhoneCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de telefono

**RUTA**:http://138.197.209.109:3000/api/phonecatalog

**VALORES RECIBIDOS**
- **metodo**: GET
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{}
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
- **id_phone_catalog**: (int)
- **type_phone**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_phone_catalog": "(int)",
          "type_phone": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)