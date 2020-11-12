[RETORNO](../README.md)
## **ENDPOINT**: ControllerDepartmentCatalog (POST)

**DESCRIPCION**: Este servira para crear un nuevo registro de catalogo de Departamento

**RUTA**:http://138.197.209.109:3000/api/departmentcatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **department**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
      "department": "(string)"
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