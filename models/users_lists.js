
class UserList{ // Singleton de usuarios creacion y eliminacion 

    constructor(){
        this.users = [];
    }

    static getInstance(){
        if( !this.instance ){
            this.instance = new UserList();
        }
        return this.instance;
    }

    pushUser( user ){
        this.users.push( user );
    }

    removeUser( user ){
        this.users = this.users.filter( u => u.email == user.email);
        return this.users;
    }

}

module.exports = {
    UserList
}