[RETORNO](../README.md)

## **ENDPOINT**: ControllerAttachment (GET)

**DESCRIPCION**: este servira para obtener todos los documentos adjuntos de una persona

**RUTA**:http://138.197.209.109:3000/api/attachment/:id_person

**VALORES RECIBIDOS**
- **metodo**: GET
- **id_person**: (int)
    
**FORMATO JSON DE RECIBIR**

```json
{
  "method":"GET",
  "message":"",
  "body":{
    "id_person": "(int)"
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
- **id_attachment_person** :(int)
- **attachment**: (string)
- **description**: (string)
- **type_attachment**: (string)
    
**FORMATO JSON DE RETORNO**
```json
{
  "code":"(int)",
  "message":"(string)",
  "body":[
      ...
      {   
          "id_attachment_person": "(int)",  
          "attachment": "(string)",
          "description":"(string)",
          "type_attachment": "(string)"
      },
      ...
  ]
}
```
[RETORNO](../README.md)