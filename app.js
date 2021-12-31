require('dotenv').config(); //Carga las variables de entorno

const Server = require('./models/server'); 

const server = new Server(); // Crea una instancia del Server
server.listen(); // Levanta el servidor