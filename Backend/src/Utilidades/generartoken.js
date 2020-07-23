const jwt = require('jwt-simple')
const moment = require('moment');
const config = require('../config');

function crearToken(cuenta){
    const payload ={
        sub: cuenta.idCuenta,
        iat: moment().unix(),
        exp: moment().add(1,'year').unix(),

    }
    return jwt.encode(payload,config.SECRET_TOKEN);
}


module.exports = crearToken;