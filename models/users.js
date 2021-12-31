
class User{ // modelo de un usuario

    constructor( nombre, email, photo, password ){
        this.nombre = nombre;
        this.email = email;
        this.photo = photo;
        this.password = password;
    }

}

module.exports = {
    User
}