[RETORNO](../README.md)
## **ENDPOINT**: ControllerDepartmentCatalog (PUT)

**DESCRIPCION**: Este servira para actualizar un registro del catalogo de Departamento

**RUTA**:http://138.197.209.109:3000/api/departmentcatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_department**: (int)
- **department**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_department":"(int)",
      "department": "(string)"
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