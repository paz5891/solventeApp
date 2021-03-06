[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicy (GET)

**DESCRIPCION**: este servira para obtener todas las solicitudes de las polizas por analizar

**RUTA**:http://138.197.209.109:3000/api/policy/analyze/policy

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
- **end_date**: (date)
- **creation_date**: (date)
- **prima**: (DECIMAL(10,2))
- **contract_amount**: (DECIMAL(10,2))
- **insured_amount**: (DECIMAL(10,2))
- **iva**: (DECIMAL(10,2))
- **emission_rights**: (DECIMAL(10,2))
- **financing_surcharges**: (DECIMAL(10,2))
- **cancellation_date**: (date)
- **validity**: (int)
- **renewal**: (int)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
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
          "policy_status":"(string)",
          "id_state":"(int)",
          "state": "(string)",
          "id_sib_period": "(int)",
          "end_date": "(date)",
          "creation_date": "(date)",
          "prima": "(DECIMAL(10,2))",
          "contract_amount": "(DECIMAL(10,2))",
          "insured_amount": "(DECIMAL(10,2))",
          "iva": "(DECIMAL(10,2))",
          "emission_rights": "(DECIMAL(10,2))",
          "financing_surcharges": "(DECIMAL(10,2))",
          "cancellation_date": "(date)",
          "validity": "(int)",
          "renewal": "(int)"
      }
      ...
  ]
}
```

[RETORNO](../README.md)