[RETORNO](../README.md)
## **ENDPOINT**: ControllerBouquet (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet

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
- **id_bouquet"**: (int)
- **bouquet**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_bouquet": "(int)",
          "bouquet": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)