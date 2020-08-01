const conexionBaseDatos = require('../../Utilidades/conexionBaseDatos');

async function obtenerIdCuenta(correo){
    const idCuenta = await conexionBaseDatos.query('SELECT IdCuenta FROM Cuenta WHERE Correo = $1;',[correo]);
    return idCuenta.rows[0];
}

async function regresarIdCuenta(correo){
    const jsonCuenta = await obtenerIdCuenta(correo);
    for(var myKey in jsonCuenta) {
        return idCuenta = jsonCuenta[myKey];
    }
}

module.exports = {
    regresarIdCuenta
}