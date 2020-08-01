const jwt = require('jwt-simple')
const moment = require('moment');
const config = require('../Utilidades/config');


function crearToken(idCuenta){
    const payload ={
        sub: idCuenta,
        iat: moment().unix(),
        exp: moment().add(1,'year').unix(),

    }
    return jwt.encode(payload,config.SECRET_TOKEN);
}

function decodificarToken(token){
    return jwt.decode(token);
}

function verificarToken(req, res , next){
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth: false,
            mensaje: 'No existe token'
        });
    }
    const decoded = jwt.decode(token,config.SECRET_TOKEN);
    req.idCuenta = decoded.id;
    next();
}

module.exports = {
    crearToken,
    verificarToken
}