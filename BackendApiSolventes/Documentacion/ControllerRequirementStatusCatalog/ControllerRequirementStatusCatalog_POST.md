[RETORNO](../README.md)

## **ENDPOINT**: ControllerRequirementStatusCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro del catalogo de los estados de los requerimientos

**RUTA**:http://138.197.209.109:3000/api/requirementstatuscatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **requirement_status**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "requirement_status": "(string)"
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