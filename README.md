# Prueba técnica FYG Servidor

Este repositorio tiene todo el codigo fuente para ejecutar un servidor de Node
con Socket.io y Express. La version de node utilizada es v16.10.0

## Requisitos

- Tener instalado Node.js, la última LTS está bien. 

- Dentro del proyecto hay un archivo llamado .env en la raíz del proyecto, cambia el puerto si en tu equipo está ocupado.

- Dentro de la carpeta del proyecto en la terminal ejecuta el comando
    >npm install
    
    Esto instalará los paquetes necesarios para lanzar el servidor

- Cuando finalice, ejecuta el comando
    >npm start

    Esto iniciará el servidor

- Si tienes problemas de conexión, tal vez debas desactivar el firewall momentáneamente en el equipo que ejecuta el servidor o reiniciarlo. Presiona Ctrl + Z para finalizar el servidor y levantalo de nuevo con "npm start" o "node app".

- Abre el navegador con la ip del servidor seguido del puerto, por ejemplo "192.168.100.40:8000" y mostrará la información de los productos registrados. Si estás en Google Chrome abre la consola del navegador. Verás los cambios en tiempo real.


Eso sería todo!! Ya tienes el servidor montado.

