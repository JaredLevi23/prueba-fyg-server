// Conexion al servidor

let socket = io();
socket.on('connect', ()=>{ // Conexion del cliente al servidor 
    console.log('Conectado al servidor');
});

socket.on('disconnect', ()=>{ // Fin de conexion 
    console.log('Desconectado');
});

socket.on('productos-registrados', async ( data )=>{ // Escucha los productos registrados 
    console.clear();
    console.table(data);

    let url = '/api/products';

    obj = await (await fetch(url)).json(); //  getproductos de la api 
    const content = document.querySelector('p');
    content.textContent = JSON.stringify( obj ); 
    
});