# Proyecto E-commerce con React y Firebase

Este proyecto es una aplicación de e-commerce construida con **React** que permite a los usuarios navegar productos, filtrarlos por categorías, agregar productos a un carrito, y realizar operaciones con el carrito como incrementar, decrementar o vaciar los productos.

## Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario.
- **React Router**: Librería para manejar rutas y navegación entre diferentes vistas de la aplicación.
- **Firebase Firestore**: Base de datos NoSQL utilizada para almacenar los productos y recuperar datos de forma dinámica.
- **Firebase Hosting**: Servicio utilizado para el despliegue y hosting de la aplicación.
- **Context API**: Utilizado para manejar el estado global del carrito de compras y compartirlo entre diferentes componentes.
- **Bootstrap**: Librería de estilos CSS utilizada para el diseño y la disposición de los componentes.

## Funcionalidades Principales

1. **Listado de Productos**:
   - Se recuperan desde Firebase y se muestran en la aplicación.
   - Los productos se pueden filtrar por categorías (Naturaleza, Arquitectura, Collages).

2. **Detalle del Producto**:
   - Cada producto tiene una vista detallada donde se muestra información adicional (título, precio, categoría, stock, etc.).
   - En esta vista, los usuarios pueden agregar productos al carrito.

3. **Carrito de Compras**:
   - Se maneja con la Context API y permite agregar, eliminar o vaciar productos.
   - El número de productos en el carrito se actualiza dinámicamente en el icono del carrito.

4. **Operaciones en el Carrito**:
   - Incrementar o decrementar la cantidad de un producto desde la vista de detalles del producto.
   - Validación para evitar que se agreguen más productos de los disponibles en el stock.
   
5. **Filtrado por Categorías**:
   - Los usuarios pueden filtrar los productos por las tres categorías mencionadas, y la consulta de productos es dinámica desde Firebase.

## Estructura del Proyecto
