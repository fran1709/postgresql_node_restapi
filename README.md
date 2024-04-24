<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Mi Aplicación Rest API con Node.js y PostgreSQL</h1>
    <h2>Descripción</h2>
    <p>Esta es una aplicación Node.js que utiliza PostgreSQL como base de datos para crear una API RESTful. La aplicación proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos PostgreSQL.</p>
    <h2>Requisitos</h2>
    <ul>
        <li>Node.js</li>
        <li>PostgreSQL</li>
    </ul>
    <h2>Instalación</h2>
    <ol>
        <li>Clona este repositorio: <code>git clone https://github.com/tu-usuario/tu-repositorio.git</code></li>
        <li>Instala las dependencias: <code>npm install</code></li>
        <li>Crea una base de datos PostgreSQL y configura las credenciales en el archivo de configuración.</li>
        <li>Ejecuta la aplicación: <code>npm run dev</code></li>
    </ol>
    <h2>Endpoints</h2>
    <ul>
        <li><strong>GET /api/users</strong>: Obtiene todos los usuarios.</li>
        <li><strong>GET /api/users/:id</strong>: Obtiene un usuario específico por su ID.</li>
        <li><strong>POST /api/users</strong>: Crea un nuevo usuario.</li>
        <li><strong>PUT /api/users/:id</strong>: Actualiza un usuario existente.</li>
        <li><strong>DELETE /api/users/:id</strong>: Elimina un usuario existente por su ID.</li>
    </ul>
</body>
</html>
