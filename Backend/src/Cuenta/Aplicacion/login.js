const Cuenta = require('../Dominio/Cuenta');
const bcrypt = require('bcrypt');
const crearToken = require('../../Utilidades/generartoken');
const conexionBaseDatos = require('../../conexionBaseDatos');
const {comparar} = require('../../encriptador');

const login = async (req, res) =>{
    try {
        var cuenta = new Cuenta();
        cuenta = {correo: req.body.correo,contraseña: req.body.contraseña,nombreUsuario: req.body.nombreUsuario};
        if(await validarCuentaBaseDatos(cuenta.correo) !=null && await validarNombreUsuario(cuenta) !=null){
            if(await validarContraseñasIguales(cuenta)){
               //const token = crearToken(cuenta.idCuenta);
            }else{
                res.send({error:'Las contraseñas no coinciden'});
            }
        }else{
            res.send({error: 'El correo ingresado y/o el nombre de usuario no está registrado'});
        }
    } catch (error) {
        console.log(error)
    }
}

async function validarCuentaBaseDatos(correo){
    const cuenta = await conexionBaseDatos.query('SELECT Correo,Contraseña,NombreUsuario FROM Cuenta WHERE correo = $1',[correo]);
    return cuenta.rows[0];
}

async function validarContraseñasIguales(cuenta){
    var cuentaBD = await validarCuentaBaseDatos(cuenta.correo);
    return (comparar(cuenta.contraseña, cuentaBD.contraseña))
}

async function validarNombreUsuario(cuenta){
    var cuentaBD = await conexionBaseDatos.query('SELECT Correo,Contraseña, NombreUsuario FROM Cuenta WHERE NombreUsuario = $1',[cuenta.nombreUsuario])
    return cuentaBD.rows[0];
}

module.exports ={
    login
}

