

# Node JS + Express + MongoDB + Typescript

Se deben setear todas las variables de entorno en el .env o en la aplicacion que el hosting tenga para dicho fin.
/src/.env
```
ejemplo:
process.env.NODE_ENV=development
process.env.PORT=3000
etc...
```
se debe tener en cuenta la direccion ip en mongo atlas para que se pueda conectar a la base de datos.

Luego se puede ejecutar los siguientes comandos:
```
npm install
npm run dev
```

Se puede acceder a la API de desarrollo mediante https:
```
https://localhost:3000
```
