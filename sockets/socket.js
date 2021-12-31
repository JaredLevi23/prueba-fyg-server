const { response, Router, request } = require('express');
const { Product } = require('../models/product');
const { Products } = require('../models/products');

const products = new Products();

products.addProduct( new Product(
    'App movil catalogo',
    'Desarrollo de app movil',
    500,
    'Servidor de Node',
    'Producto digital'
) );

// Emit on -> Emiten y escuchan las respuestas
const productsController = ( socket ) =>{

    console.log( 'Cliente conectado ', socket.id);
    socket.emit('productos-registrados', products.products ); // Emite la lista de productos

    socket.on('producto-nuevo', ( data ) =>{ // Escucha los productos nuevos
        products.addProduct( new Product( data.name, data.description, data.price, data.create, data.type) );
        socket.emit('productos-registrados', products.products );
        socket.broadcast.emit('productos-registrados', products.products );
    });

    socket.on('borrar-producto', ( data )=>{ // Escucha el producto a borrar
        products.deleteProduct( data.id );
        socket.emit('productos-registrados', products.products );// Emite al cliente la lista de productos
        socket.broadcast.emit('productos-registrados', products.products );// Emite a todos la lista de productos
    });

    socket.on('producto-actualizado', (data) =>{ // Escucha la actualizacion de producto
        products.updateProduct( data );
        socket.emit('productos-registrados', products.products ); // Emite la lista de productos sl cliente
        socket.broadcast.emit('productos-registrados', products.products );// Emite la lista de productos a todos
    });

}


const router = Router();

router.get('/', ( req = request ,res = response )=>{ // get de productos 

    res.json({ // Respuesta
        ok: true,
        results: products.getProducts() // Productos
        
    });
} );


module.exports = {
    productsController,
    router
}