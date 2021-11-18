# Castor invoice
Proyecto de práctica de facturación con NODEJS 

## Common tasks

- [X] Agregar .gitinore para ignorar los archivos que no son necesarios subir al repositorio (Ej: node_modules)
- [X] Configurar EsLint
- [X] Configurar express
- [X] Configurar awillix para usar controladores
- [X] Crear un endpoint que se llame /health del tipo GET
  * Deberá retornar un object que diga { status: 'ok', date: <<fecha_actual>> }
- [X] Crear en el package.json el script para levantar el proyecto "npm run start"
- [X] Crear en el package.json el script para levantar el proyecto con nodemon "npm run dev"
- [X] Agregar el DEBUG al proyecto

## User module
- [X] Implementar este cliente de mongo https://www.npmjs.com/package/mongodb
- [X] Crear controlador de usuarios.
- [X] Crear servicio de usuarios.
- [X] Crear metodo de creacion de usuario.
  * Registrar el usuario en la coleccion users
  * Registrar el password en la coleccion passwords
  * El password debe ser encriptado usando https://www.npmjs.com/package/bcrypt
