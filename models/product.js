const { v4:uuidV4 } = require('uuid');

class Product{ // Modelo de producto

    constructor( name, description, price, create, type ){
        this.id = uuidV4(); // Genera un id unico con el paquete uuid
        this.name = name;
        this.description = description;
        this.price = price;
        this.create = create;
        this.type = type;
    }
}


module.exports = {
    Product
}