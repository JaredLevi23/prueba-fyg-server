const express = require('express');
const cors = require('cors');
const { productsController, router } = require('../sockets/socket');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT; // puerto de la aplicacion
        this.server = require('http').createServer( this.app ); // crea el servidor
        this.io = require('socket.io')(this.server); // incorpora el socket al servidor

        this.paths = { // endpoints 
            usuarios: '/api/users',
            productos: '/api/products',
            login: '/api/login',
            google: '/api/google',
        }

        this.middlewares();
        this.routes();
        this.sockets();

    }


    middlewares(){
        //funciones 
        this.app.use( cors() );
        this.app.use( express.json() ); // Tratar las request 
        this.app.use( express.static('public')  ); // Carpeta publica 
    }

    routes(){
        // Rutas
        this.app.use( this.paths.google, require('../routes/auth_google') );
        this.app.use( this.paths.login, require('../routes/auth_server') );
        this.app.use( this.paths.productos, router );
        this.app.use( this.paths.usuarios, require('../routes/users') );
    }

    sockets(){
        this.io.on('connection', productsController); // Levantamiento de socket a las conexiones
    }


    listen(){ // Levanta el servidor 
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ' , this.port );
        });
    }
}

module.exports = Server;