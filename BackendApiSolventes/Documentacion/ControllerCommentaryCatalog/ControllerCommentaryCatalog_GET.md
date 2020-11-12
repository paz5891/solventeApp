[RETORNO](../README.md)

## **ENDPOINT**: ControllerCommentaryCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de commentario

**RUTA**:http://138.197.209.109:3000/api/commentarycatalog/:id_person

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_person** : (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_person": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **nameperson**: (string)
- **commentary** (string)
- **date** :(datetime)
- **code** : (int)
- **message** : (string)

    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "nameperson": "(string)",
          "commentary": "(string)",
          "date": "(datetime)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)