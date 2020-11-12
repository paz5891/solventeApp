[RETORNO](../README.md)
## **ENDPOINT**: ControllerDepartmentCatalog (GET)

**DESCRIPCION**: Este servira para obtener todos los elementos del catalogo de Departamento

**RUTA**:http://138.197.209.109:3000/api/departmentcatalog

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
- **message** (string)
- **id_department** :(int)
- **department**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_department": "(int)",
          "department": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)