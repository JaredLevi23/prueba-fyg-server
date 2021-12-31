const { Product } = require('./product');

// Modelo de  productos, con las funciones de CRUD
class Products{
    constructor(){
        this.products = [];
    }

    addProduct( product = new Product() ){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    deleteProduct( id = '' ){
        this.products = this.products.filter( product => product.id !== id );
        return this.products;
    }

    updateProduct( data ){
        for (const p in this.products) {
            
            if(this.products[p].id === data.id ){
                this.products[p].name = data.name;
                this.products[p].description = data.description;
                this.products[p].price = data.price;
                this.products[p].type = data.type;
            }
        }
        return this.products;
    }


}

module.exports = {
    Products
}