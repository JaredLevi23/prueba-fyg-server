const {validarGoogleIdToken} = require('../helpers/google-verify-token');
const { request, response } = require('express');
const { UserList } = require('../models/users_lists');

const dataUser = UserList.getInstance();;

const googleAuth = async( req =  request, res= response )=>{
    const { token } = req.body;

    if( !token ){
        return res.status(400).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }

    const googleUser = await validarGoogleIdToken( token );
    if( !googleUser ){
        return res.status(400).json({
            ok: false
        });
    }
    
    res.json({
        ok: true,
        googleUser
    });

}



const serverAuth = ( req =  request, res = response )=>{

    const { email, password } = req.body;

    if( !email || !password){
        return res.status(400).json({
            ok: false,
            msg: 'Faltan parametros'
        });
    }

    for (const user in dataUser.users) {

        if( dataUser.users[user].email === email && dataUser.users[user].password === password){
            const googleUser = {
                name: dataUser.users[user].nombre,
                email: dataUser.users[user].email,
                picture: ''
            }

            return res.status(200).json({
                ok: true,
                googleUser
            });
        }
    }

    res.status(200).json({
        ok: false,
        msg: 'Credenciales equivocadas'
    });


}


module.exports = {
    googleAuth,
    serverAuth
}