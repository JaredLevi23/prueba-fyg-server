const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '927302760247-i7j9frqui86gh1lmgkr659cr24eelbsm.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);


const validarGoogleIdToken = async ( token ) =>{
    try{
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [
            CLIENT_ID,
            '927302760247-ragdl5u74gef3kbfur4vq5h3pge7ajoj.apps.googleusercontent.com',
            '927302760247-ragdl5u74gef3kbfur4vq5h3pge7ajoj.apps.googleusercontent.com'
          ],  // Specify the CLIENT_ID of the app that accesses the backend
      });
      const payload = ticket.getPayload();
      //const userid = payload['sub'];
      return {
        name: payload['name'],
        picture: payload['picture'],
        email: payload['email']
      }
    }catch{
      return null;
    }
}

module.exports = {
    validarGoogleIdToken
}
