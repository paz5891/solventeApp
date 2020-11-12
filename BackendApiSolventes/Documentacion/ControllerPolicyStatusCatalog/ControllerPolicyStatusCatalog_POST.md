[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicyStatusCatalog (POST)

**DESCRIPCION**: este servira para crear un nuevo registro del catalogo de los estados de las polizas

**RUTA**:http://138.197.209.109:3000/api/policystatuscatalog

**VALORES RECIBIDOS**
- **metodo**: POST
- **policy_status**: (string)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"POST",
  "message":"",
  "body":{
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
  "message":"CREATED SUCCESSFULLY",
  "body":[]
}
```

 [RETORNO](../README.md)