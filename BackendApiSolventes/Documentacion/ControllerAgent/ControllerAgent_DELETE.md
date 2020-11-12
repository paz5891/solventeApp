[RETORNO](../README.md)
## **ENDPOINT**: ControllerAgent (DELETE)

**DESCRIPCION**: Este servira para habilitar o deshabilitar a los agentes

**RUTA**:http://138.197.209.109:3000/api/agent/:id

**VALORES RECIBIDOS**
- **metodo**: DELETE
- **id_agent**: (int)

    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"DELETE",
  "message":"",
  "body":{
      "id_agent":"(int)"
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
  "message":"DELETED SUCCESSFULLYY",
  "body":[]
}
```
[RETORNO](../README.md)