[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicyStatusCatalog (PUT)

**DESCRIPCION**: este servira para actualizar un registro del catalogo de los estados de las polizas

**RUTA**:http://138.197.209.109:3000/api/policystatuscatalog

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_policy_status**: (int)
- **policy_status**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_policy_status":"(int)",
      "policy_status": "(string)"
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