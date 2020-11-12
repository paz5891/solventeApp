[RETORNO](../README.md)

## **ENDPOINT**: ControllerRequirementStatusCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de los estados de los requerimientos

**RUTA**:http://138.197.209.109:3000/api/requirementstatuscatalog

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
- **id_requirement_status**: (int)
- **requirement_status**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_requirement_status": "(int)",
          "requirement_status": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)