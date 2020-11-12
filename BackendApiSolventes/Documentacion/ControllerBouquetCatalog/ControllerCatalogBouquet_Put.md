[RETORNO](../README.md)

## **ENDPOINT**: ControllerBouquet (PUT)

**DESCRIPCION**: este servira para actualizar un registro del catalogo de ramos

**RUTA**:http://138.197.209.109:3000/api/bouquet

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_bouquet**: (int)
- **bouquet**: (String)
-
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_bouquet":"(int)",
      "bouquet":"(Sting)"
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