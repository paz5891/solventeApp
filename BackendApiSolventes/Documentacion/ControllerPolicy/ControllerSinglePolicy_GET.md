[RETORNO](../README.md)
## **ENDPOINT**: ControllerPolicy (GET)

**DESCRIPCION**: este servira para obtener todos los datos de las polizas por su id

**RUTA**:http://138.197.209.109:3000/api/policy/:id_policy/single

**VALORES RECIBIDOS**
- **metodo**: GET   
- **id_policy**: (int)
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
      "id_policy": "(int)"
  }
}
```

**VALORES DE RETORNO**
- **code**: (int)
- **message**: (string)
- **id_policy**: (int)
- **identifier**: (string) 
- **id_trust**: (int)
- **id_agent**: (int)
- **id_user**: (int)
- **id_bouquet**: (int) 
- **bouquet**: (string)
- **id_bouquet_type**: (int)
- **bouquet_type**: (string)
- **id_policy_status**: (int)
- **policy_status**: (string)
- **id_sib_period**: (int) 
- **end_date**: (string)
- **creation_date**: (string)
- **prima**: (DECIMAL(10,2))
- **contract_amount**: (DECIMAL(10,2))
- **insured_amount**: (DECIMAL(10,2))
- **iva** (DECIMAL(10,2))
- **emission_rights**: (DECIMAL(10,2))
- **financing_surcharges**: (DECIMAL(10,2))
- **cancellation_date**: (string)
- **validity**: (int)
- **renewal**:(int)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      {
          "id_policy": "(int)",
          "identifier": "(string)", 
          "id_trust": "(int)",
          "id_agent": "(int)",
          "id_user": "(int)",
          "id_bouquet": "(int)", 
          "bouquet": "(string)",
          "id_bouquet_type": "(int)",
          "bouquet_type": "(string)",
          "id_policy_status": "(int)",
          "policy_status": "(string)",
          "id_sib_period": "(int)", 
          "end_date": "(string)",
          "creation_date": "(string)",
          "prima": "(DECIMAL(10,2))",
          "contract_amount": "(DECIMAL(10,2))",
          "insured_amount": "(DECIMAL(10,2))",
          "iva": "(DECIMAL(10,2))",
          "emission_right": "(DECIMAL(10,2))",
          "financing_surcharges": "(DECIMAL(10,2))",
          "cancellation_date": "(string)",
          "validity": "(int)",
          "renewal": "(int)"
      }
  ]
}

```
[RETORNO](../README.md)