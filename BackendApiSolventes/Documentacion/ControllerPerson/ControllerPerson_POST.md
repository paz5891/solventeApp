[RETORNO](../README.md)

## **ENDPOINT**: ControllerPerson (POST)

**DESCRIPCION**: este servira para crear un registro de persona

**RUTA**:http://138.197.209.109:3000/api/person

**VALORES RECIBIDOS**
- **metodo**: POST
- **id_rol**: (int)
- **id_municipality**: (int)
- **id_type_person**: (int)
- **id_comercial_activity**: (int)
- **nit**: (string)
- **cui**: (string)
- **first_name**: (string)
- **second_name**: (string)
- **first_surname**: (string)
- **second_surname**: (string)
- **date_of_birth**: (date)
- **business_name**: (string)
- **constitution_date**: (date)
- **commercial_patent_number**: (string)
- **email**: (string)
- **avatar**: (string)
- **sexo**: (Char M || F)
- **"phone_person"**: [
-    {
        **"id_phone_catalog"**: "(int)",
        **"phone"**: "(string)"
-    },
-    {
        **"id_phone_catalog"**: "(int)",
        **"phone"**: "(string)"
-    }
- ],
- **"address_person"**: [
-    {
        **"id_address_catalog"**: "(int)",
        **"address"**: "(string)"
-    },
-    {
        **"id_address_catalog"**: "(int)",
        **"address"**: "(string)"
-    }
- ],
- **"attachment_person"**:[
-    {
        **"id_attachment_catalog"**: "(int)",
        **"attachment"**: "(string)",
        **"description"**: "(string)"
-    },
-    {
        **"id_attachment_catalog"**: "(int)",
        **"attachment"**: "(string)",
        **"description"**: "(string)"
-    }
- ]
    
# NOTA 
aparte de enviar este formato de json se necesita enviar los documentos con el nombre de **attachment_person** y **avatar_person** como input file

# Nota
se puede colocar cuanta cantidad de direcciones,telefono y adjuntos en este caso

**FORMATO JSON DE RECIBIR**

```json
{
    "method": "POST",
    "message": "",
    "body": {
        "id_rol": "(int)",
        "id_municipality": "(int)",
        "id_type_person": "(int)",
        "id_comercial_activity": "(int)",
        "nit": "(string)",
        "cui": "(string)",
        "first_name": "(string)",
        "second_name": "(string)",
        "first_surname": "(string)",
        "second_surname": "(string)",
        "date_of_birth": "(date)",
        "business_name": "(string)",
        "constitution_date": "(date)",
        "commercial_patent_number": "(string)",
        "email": "(string)",
        "avatar": "(string)",
        "sexo": "(Char M || F)",
        "phone_person": [
            {
                "id_phone_catalog": "(int)",
                "phone": "(string)"
            },
            {
                "id_phone_catalog": "(int)",
                "phone": "(string)"
            }
        ],
        "address_person": [
            {
                "id_address_catalog": "(int)",
                "address": "(string)"
            },
            {
                "id_address_catalog": "(int)",
                "address": "(string)"
            }
        ],
        "attachment_person":[
            {
                "id_attachment_catalog": "(int)",
                "attachment": "(string)",
                "description": "(string)"
            },
            {
                "id_attachment_catalog": "(int)",
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

