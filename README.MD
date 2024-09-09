# Tarea: Implementación de CRUD para Unidad de Medida

Este proyecto tiene como objetivo implementar las operaciones de **Update** y **Delete** para la entidad **Unidad de Medida**. Se ha utilizado **PHP** como backend y **Angular** como frontend, en un entorno de arquitectura **MVC**.

## Estructura del Proyecto

El proyecto está dividido en dos secciones principales:

### 03MVC (PHP)

1. **unidadmedida.controller.php**  
   Controlador que gestiona las solicitudes HTTP relacionadas con **Unidad de Medida**. Se encarga de invocar los métodos del modelo y devolver las respuestas adecuadas.

2. **unidadmedida.model.php**  
   Modelo que interactúa con la base de datos. Incluye los métodos necesarios para realizar las operaciones **Update** y **Delete** sobre la tabla **Unidad de Medida**.

### 04Plantilla (ANGULAR)

1. **unidadmedida.service.ts**  
   Servicio que facilita la comunicación entre el frontend (Angular) y el backend (PHP). En este archivo se encuentran los métodos HTTP para realizar las operaciones de **CRUD**.

2. **unidadmedida.component.ts**  
   Componente Angular que maneja la vista y la lógica de interacción para **Unidad de Medida**. Controla los formularios y las interacciones de usuario para las operaciones de **Insert** y **Update**.

## Instalación y Ejecución

### Requisitos Previos

- Servidor **Apache** o **Nginx**.
- **PHP** instalado (versión 7.x o superior).
- **MySQL** o cualquier base de datos compatible.
- **Angular CLI** para el desarrollo frontend.
- **Node.js** (para manejar el entorno Angular).

### Backend (PHP)

1. Clona el repositorio o descarga los archivos.
2. Configura los parámetros de conexión a la base de datos en `config.php`.
3. Asegurate que han sido importadas las tablas necesarias para **Unidad de Medida** en tu base de datos.
4. Coloca el proyecto en el servidor local y asegúrate de que Apache/Nginx esté funcionando.

### Frontend (Angular)

1. Navega a la carpeta `04Plantilla` y ejecuta la instalación de las dependencias necesarias.
2. Inicia el servidor de desarrollo de Angular y accede a la aplicación desde tu navegador en `http://localhost:4200`.

## Funcionalidades

### Unidad de Medida

- **Update**: Actualiza los datos de una unidad de medida existente en la base de datos.
- **Delete**: Elimina una unidad de medida específica.

## Archivos Relevantes

- **unidadmedida.controller.php**: Controlador principal para las operaciones de **Unidad de Medida**.
- **unidadmedida.model.php**: Contiene las funciones de base de datos para **Update** y **Delete**.
- **unidadmedida.service.ts**: Servicio Angular que se comunica con el backend para las operaciones de **CRUD**.
- **unidadmedida.component.ts**: Componente Angular que maneja las vistas y la lógica de interacción.


