[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicyStatusCatalog (GET)

**DESCRIPCION**: este servira para obtener todos los elementos del catalogo de los estados de las polizas

**RUTA**:http://138.197.209.109:3000/api/policystatuscatalog

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
- **id_policy_status**: (int)
- **policy_status**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {
          "id_policy_status": "(int)",
          "policy_status": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)