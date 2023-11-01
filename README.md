# Getting Started with Create React App

Este proyecto fue generado con [Create React App](https://github.com/facebook/create-react-app).

## Despliegue
Para el despliegue de la applicación es necesario:

1. Clonar proyecto con el siguiente comando:
```bash
git clone https://github.com/alexgm5555/react-adl-occi-shopping-car.git
```
2. Instalar dependencias
```bash
npm  install
```
3. levantar el proyecto con el comando
```bash
npm start
```
4. Para correr las pruebas unitaria, ejecutar el siguiente comando: 
```bash
npm run test
```
con la tabla de coverage:
```bash
npm run test:coverage
```

5. El despliegue de la aplicación lo puede encontrar en la siguiente url: 
https://dashing-yeot-b35187.netlify.app
Email: 1
Password: 1

### Recomendaciones
1. La versión de node que se utilizó para desarrollar este proyecto fue:\
```v16.13.0```\  Recomendamos hacer el despliege con esa versión.

## Requerimientos
● Se requiere crear una aplicación web para un sistema de ventas en React.
● Crear una pantalla de login básica, que validará los usuarios registrados en un archivo json.
[
{ name: “Test 1”, email: test1@test.com, password: “123456”},
{ name: “Test 2”, email: test2@test.com, password: “654321”}
]
● Listar los productos que se encuentran en un archivo json con formato
[
{ id: “1”, name: “Product 1”, description: “Description”, cost: “5.0” },
{ id: “2”, name: “Product 2”, description: “Description”, cost: “7.0” },
]
● Seleccionar productos y persistir en un carrito de compras en Redux , mostrar el total de la
compra y poder modificar el número de artículos seleccionado así como eliminar productos del
carrito.
● Realizar pruebas unitarias por lo menos de un componente.
Tener en cuenta.
● Se puede utilizar cualquier framework de diseño aunque no es necesario.
● Cuenta como plus modularizar la aplicación
● Subir el código a un repositorio público y compartir la url.
● Desplegar la prueba en un dominio gratuito o servicio en la nube y compartir la url.