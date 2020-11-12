[RETORNO](../README.md)

## **ENDPOINT**: ControllerRequirementStatusCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro del catalogo de los estados de los requerimientos

**RUTA**:http://138.197.209.109:3000/api/requirementstatuscatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_requirement_status**: (int)
- **requirement_status**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_requirement_status":"(int)",
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
  "message":"UPDATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)