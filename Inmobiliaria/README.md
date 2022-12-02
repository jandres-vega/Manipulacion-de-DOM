# Proyecto Sprint 3

## Desarrollo de sitio web de una compañía inmobiliaria

- Instalar dependencias npm i
- Con el comando npm run dev puedes iniciar el servidor 

1. Hacer uso de CSS para realizar el diseño responsive, de acuerdo con el modelo compartido en el archivo compartido en casaRoyal.sketch.
2. El navbar debe contener los enlaces para ir a página de favoritos e inputs para realizar búsquedas de inmuebles por ubicación y por tipo de vivienda (esta última opción puede ser mediante un select o botones de filtrado).
3. Cargar la data de los inmuebles con cards donde se mostrará información relevante de cada producto (imagen, nombre, ubicación, área, precio, etc).
4. Implementar JSON-SERVER con toda la información de los inmuebles y consumir la data por peticiones HTTP con Fetch, gestionando estas promesas, ya sea con .then().catch() o async/await. Como mínimo implementar método GET.
5. Si selecciona un producto, se debe mostrar en una página diferente, el detalle del inmueble, con un botón que llevar a favoritos mostrando la siguiente información:
   a. Imágenes del inmueble
   b. Nombre
   c. ubicación
   d. Área total en metros cuadrados
   e. Número de habitaciones, baños
   f. Tipo de inmueble (casa, finca, local comercial, apartamento, etc.)
   g. Si se renta o está a la venta
   h. Precio
   i. Si tiene parqueadero
   j. Propietario e información del propietario (nombre, contacto)
   k. Descripción.
