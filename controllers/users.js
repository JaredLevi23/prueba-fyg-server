const { request, response } =require("express");
const {UserList} = require("../models/users_lists");


const dataUser = UserList.getInstance();

const getUser = (req = request, res = response) =>{
    res.status(200).json({
        ok: true,
        users : dataUser.users
    });
}

const postUser = ( req = request, res = response )=>{

    const { email, password, nombre } = req.body;

    //console.log( req.body );

    if( !email || !password || !nombre){
        return res.status(400).json({
            ok: false,
            msg : 'Completa los datos'
        });
    }


    for (const user in dataUser.users) {
        if( dataUser.users[user].email === email){
            return res.status(400).json({
                ok: false,
                msg: 'El correo electronico ya existe'
            });
        }
    }

    dataUser.pushUser({
        nombre,
        email,
        photo:'',
        password
    });


    res.status(200).json({
        ok: true,
        googleUser : {
            name: nombre,
            email,
            picture: ''
        }
    });

}

module.exports = {
    getUser,
    postUser
}