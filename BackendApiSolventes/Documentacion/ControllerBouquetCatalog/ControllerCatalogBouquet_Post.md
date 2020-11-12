[RETORNO](../README.md)

## **ENDPOINT**: ControllerBouquet (POST)

**DESCRIPCION**: este servira para crear un nuevo registro del catalogo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet

**VALORES RECIBIDOS**
- **metodo**: POST
- **bouquet**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "bouquet": "(string)"
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