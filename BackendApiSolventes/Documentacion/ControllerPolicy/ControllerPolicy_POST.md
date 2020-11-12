[RETORNO](../README.md)

## **ENDPOINT**: ControllerPolicy (POST)

**DESCRIPCION**: este servira para crear un registro de solicitud de poliza

**RUTA**:http://138.197.209.109:3000/api/policy

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_trust**: (int)
- **id_agent**: (int)
- **id_user**: (int)
- **id_bouquet**: (int)
- **id_bouquet_type**: (int)
- **id_sib_period**: (int)
- **prima**: (DECIMAL(10,2))
- **contract_amount**: (DECIMAL(10,2))
- **insured_amount**: (DECIMAL(10,2))
- **iva**: (DECIMAL(10,2))
- **emission_rights**: (DECIMAL(10,2))
- **financing_surcharges**: (DECIMAL(10,2))
- **validity**: (int)
- **beneficiary**: [
-    {
        **id_beneficiary**: (int)
-    },
-    {
        **id_beneficiary**: (int)
-    }
- ]
- **attachment_policy**: [
-    {
        **id_attachment_catalog_policy**: (int),
        **attachment**: (string),
        **description**: (string)
-    },
-    {
        **id_attachment_catalog_policy**: (int),
        **attachment**: (string),
        **description**: (string)
-    }
- ]

# NOTA 
aparte de enviar este formato de json se necesita enviar los documentos con el nombre de **attachment_policy** como input file

# Nota
se puede colocar cuanta cantidad de beneficiarios y adjuntos en este caso

**FORMATO JSON DE RECIBIR**

```json
{
    "method": "POST",
    "message": "",
    "body": {
        "id_trust": "(int)",
        "id_agent": "(int)",
        "id_user": "(int)",
        "id_bouquet": "(int)",
        "id_bouquet_type": "(int)",
        "id_sib_period": "(int)",
        "prima": "(DECIMAL(10,2))",
        "contract_amount": "(DECIMAL(10,2))",
        "insured_amount": "(DECIMAL(10,2))",
        "iva": "(DECIMAL(10,2))",
        "emission_rights": "(DECIMAL(10,2))",
        "financing_surcharges": "(DECIMAL(10,2))",
		"validity": "(int)",
        "beneficiary": [
            {
                "id_beneficiary": "(int)"
            },
            {
                "id_beneficiary": "(int)"
            }
        ],
        "attachment_policy": [
            {
                "id_attachment_catalog_policy": "(int)",
                "attachment": "(string)",
                "description": "(string)"
            },
            {
                "id_attachment_catalog_policy": "(int)",
                "attachment": "(string)",
                "description": "(string)"
            }
        ]
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

