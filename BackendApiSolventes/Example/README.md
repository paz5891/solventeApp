# APARTADO DE APIS PARA 'TAL MODULO'

## **ENDPOINT**: test

**DESCRIPCION**: este sevira para realizar una prueba de testeo para ver si se conecta el cliente con la api.

**RUTA**: localhost:8080/api/test

**VALORES RECIBIDOS**
- **metodo**: GET
- **nombre** (string)
- **apellido** (string)
- **fecha** (date)
- **DPI** (numero)
    
**FORMATO JSON DE RECIBIR**

```json
puede cambiar
{
  "method":"GET",
  "message":"test",
  "body":{
    "nombre":"DESCRIPCION",
    "apellido":"DESCRIPCION",
    "fecha":"DESCRIPCION",
    "DPI":"DESCRIPCION",
  }
}
```
**VALORES DE RETORNO**
- **code**: (int)
- **message** (string)
    
**FORMATO JSON DE RETORNO**
```json
puede cambiar
{
  "code":200,
  "message":"OK",
  "body":{}
}
```