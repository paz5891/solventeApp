[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicy (PUT)

**DESCRIPCION**: este servira para actualizar un registro de solicitud de poliza

**RUTA**:http://138.197.209.109:3000/api/policy

**VALORES RECIBIDOS**
- **metodo**: PUT
- **id_policy**: (int)
- **id_trust**: (int)
- **id_agent**: (int)
- **id_user**: (int)
- **id_bouquet**: (int)
- **id_bouquet_type**: (int)
- **prima**: (DECIMAL(10,2))
- **contract_amount**: (DECIMAL(10,2))
- **insured_amount**: (DECIMAL(10,2))
- **iva**: (DECIMAL(10,2))
- **emission_rights**: (DECIMAL(10,2))
- **financing_surcharges**: (DECIMAL(10,2))
- **validity**: (int)  

**FORMATO JSON DE RECIBIR**

```json
{
  "method":"PUT",
  "message":"",
  "body":{
      "id_policy": "(int)",
      "id_trust": "(int)",
      "id_agent": "(int)",
      "id_user": "(int)",
      "id_bouquet": "(int)",
      "id_bouquet_type": "(int)",
      "prima": "(DECIMAL(10,2))",
      "contract_amount": "(DECIMAL(10,2))",
      "insured_amount": "(DECIMAL(10,2))",
      "iva": "(DECIMAL(10,2))",
      "emission_rights": "(DECIMAL(10,2))",
      "financing_surcharges": "(DECIMAL(10,2))",
		  "validity": "(int)"
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